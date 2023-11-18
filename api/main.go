package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"

	"api/configs"
	"api/routes"
)

func main() {

	router := gin.New()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"}
	router.Use(cors.New(config))

	routes.UserRoute(router)

	configs.ConnectDB()

	router.Run("localhost:8080")
}
