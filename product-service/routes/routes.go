package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/vaisali-ch/ecom-product-service/controllers"
	"gorm.io/gorm"
)

func RegisterProductRoutes(r *gin.Engine, db *gorm.DB) {
	// You may also inject DB into controllers here if needed

	products := r.Group("/products")
	{
		products.GET("", controllers.GetProducts)
		products.GET(":id", controllers.GetProductByID)
		products.POST("", controllers.CreateProduct)
		products.PUT(":id", controllers.UpdateProduct)
		products.DELETE(":id", controllers.DeleteProduct)
		products.GET(":id/availability", controllers.CheckAvailability)
	}
}

