package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vaisali-ch/ecom-user-service/controllers"
	"gorm.io/gorm"
)

func RegisterUserRoutes(r *gin.Engine, db *gorm.DB) {
	users := r.Group("/users")
	{
		users.GET("", func(c *gin.Context) {
			controllers.GetUsers(c, db)
		})
		users.GET("/:id", func(c *gin.Context) {
			controllers.GetUserByID(c, db)
		})
		users.POST("", func(c *gin.Context) {
			controllers.CreateUser(c, db)
		})
	}
}

