package routes

import (
	"api/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoute(router *gin.Engine) {
	router.POST("/post", controllers.CreatePost())
	router.GET("/post/:postId", controllers.GetPost())
	router.PUT("/post/:postId", controllers.EditPost())
	router.DELETE("/post/:postId", controllers.DeletePost())
	router.GET("/posts", controllers.GetAllPosts())
}
