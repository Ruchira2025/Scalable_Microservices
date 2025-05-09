# ------------------------------------------
# Stage 1: Build the Go binary for Linux amd64
# ------------------------------------------
FROM --platform=linux/amd64 golang:1.20-alpine AS builder

WORKDIR /app

# Copy Go module files first
COPY go.mod go.sum ./

# Download all dependencies
RUN go mod download

# Copy source files
COPY . .

# Build binary
RUN go build -o product-service main.go

# ------------------------------------------
# Stage 2: Minimal runtime image
# ------------------------------------------
FROM alpine:latest

WORKDIR /app

# Copy binary from build stage
COPY --from=builder /app/product-service .

# Set executable permission
RUN chmod +x ./product-service

EXPOSE 4002

CMD ["./product-service"]

