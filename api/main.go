package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	ginprometheus "github.com/zsais/go-gin-prometheus"

	"api/configs"
	"api/routes"
)

func main() {

	router := gin.New()

	// Prometheus middleware
	p := ginprometheus.NewPrometheus("gin")
	p.Use(router)

	// Cors config
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	router.Use(cors.New(config))

	// General testing route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	})

	routes.UserRoute(router)

	configs.ConnectDB()

	router.Run("0.0.0.0:8080")

}
