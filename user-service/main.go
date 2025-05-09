package main

import (
	"log"

	"github.com/gin-gonic/gin"
	"github.com/vaisali-ch/ecom-user-service/config"
	"github.com/vaisali-ch/ecom-user-service/routes"
)

func main() {
	db, err := config.SetupUserDB()
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	router := gin.Default()
	routes.RegisterUserRoutes(router, db)

	log.Println("User Service running on port 4001")
	router.Run(":4001")
}

