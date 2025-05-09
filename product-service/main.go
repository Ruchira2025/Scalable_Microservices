package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type Product struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Name  string `json:"name"`
	Price int    `json:"price"`
}

var db *gorm.DB

func main() {
	// Setup DB
	var err error
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable",
		getEnv("DB_HOST", "localhost"),
		getEnv("DB_USER", "postgres"),
		getEnv("DB_PASSWORD", "postgres"),
		getEnv("DB_NAME", "productdb"),
		getEnv("DB_PORT", "5432"))

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to DB:", err)
	}

	db.AutoMigrate(&Product{})

	// Seed data if empty
	var count int64
	db.Model(&Product{}).Count(&count)
	if count == 0 {
		products := []Product{
			{Name: "Apple Watch", Price: 19999},
			{Name: "Bluetooth Headphones", Price: 2499},
			{Name: "USB-C Hub", Price: 1499},
		}
		db.Create(&products)
		log.Println("✅ Seeded initial products")
	}

	// Setup routes
	router := mux.NewRouter()
	router.HandleFunc("/products", getProducts).Methods("GET")

	log.Println("🚀 Product service running on port 4002")
	log.Fatal(http.ListenAndServe(":4002", router))
}

func getProducts(w http.ResponseWriter, r *http.Request) {
	var products []Product
	db.Find(&products)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func getEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

