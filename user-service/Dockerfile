# ------------------------------------------
# Stage 1: Build the Go binary
# ------------------------------------------
FROM golang:1.23-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum first to cache dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the entire source code
COPY . .

# Build the Go binary
RUN go build -o user-service main.go

# ------------------------------------------
# Stage 2: Minimal runtime image
# ------------------------------------------
FROM alpine:latest

# Set working directory
WORKDIR /app

# Copy the binary from the builder stage
COPY --from=builder /app/user-service .

# Expose the application port
EXPOSE 4001

# Run the service
CMD ["./user-service"]

