# Product Inventory Management System

A full-stack inventory management system built with **Spring Boot** and **React** for the Finconecta technical assessment.

## Tech Stack

### Backend
- **Java 25** with Spring Boot 4.0
- **Lombok 1.18.42** (with Java 25 compatibility)
- **PostgreSQL** (Neon serverless database)
- **MongoDB** (activity logging - planned)
- **Spring Data JPA** for database operations
- **Spring Security** (JWT authentication - planned)

### Frontend (Planned)
- React with React Router
- React Hooks for state management
- Responsive design with CSS animations

## Current Status: Phase 1 Complete ✅

### What's Working
- ✅ Full CRUD operations for Products and Categories
- ✅ PostgreSQL database integration
- ✅ Advanced product search and filtering
- ✅ Low stock detection (stock < 10 items)
- ✅ Standardized API responses with error handling
- ✅ Input validation using Bean Validation

## Project Structure

```
inventory_demo/
├── src/main/java/com/example/inventory_demo/
│   ├── model/              # JPA entities (Product, Category)
│   ├── repository/         # Spring Data repositories
│   ├── dto/                # Data Transfer Objects with validation
│   ├── service/            # Business logic layer
│   ├── controller/         # REST API endpoints
│   ├── exception/          # Custom exceptions & global handler
│   └── config/             # Security configuration
└── src/main/resources/
    └── application.properties
```

## API Endpoints

### Categories
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/{id}` | Get category by ID |
| POST | `/api/categories` | Create new category |
| PUT | `/api/categories/{id}` | Update category |
| DELETE | `/api/categories/{id}` | Delete category |

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/{id}` | Get product by ID |
| POST | `/api/products` | Create new product |
| PUT | `/api/products/{id}` | Update product |
| DELETE | `/api/products/{id}` | Delete product |
| GET | `/api/products/low-stock` | Get products with low stock |
| GET | `/api/products/search?keyword=` | Search products |
| PATCH | `/api/products/{id}/stock` | Update stock quantity |

## Quick Start

### Prerequisites
- JDK 25
- Gradle 9.1+

### Run the Application

```bash
./gradlew bootRun
```

The server will start at `http://localhost:8080`

### Build the Project

```bash
./gradlew clean build
```

## Example API Calls

### Create a Category
```bash
curl -X POST http://localhost:8080/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Electronics","description":"Electronic devices"}'
```

### Create a Product
```bash
curl -X POST http://localhost:8080/api/products \
  -H "Content-Type: application/json" \
  -d '{
    "name":"MacBook Pro M3",
    "description":"Latest MacBook Pro",
    "price":1999.99,
    "stockQuantity":15,
    "sku":"APPLE-MBP-M3",
    "categoryId":1
  }'
```

### Get Low Stock Products
```bash
curl http://localhost:8080/api/products/low-stock
```

### Search Products
```bash
curl http://localhost:8080/api/products/search?keyword=macbook
```

## Database Schema

### Categories Table
- `id` (PK, Auto-increment)
- `name` (Unique, Not Null)
- `description`
- `created_at`
- `updated_at`

### Products Table
- `id` (PK, Auto-increment)
- `name` (Not Null)
- `description`
- `price` (Not Null, Must be > 0)
- `stock_quantity` (Not Null, >= 0)
- `sku` (Unique, Not Null)
- `category_id` (FK to Categories)
- `created_at`
- `updated_at`

## Special Features

### Java 25 + Lombok Compatibility
This project uses Lombok 1.18.42 with special compiler arguments to support Java 25:
- `--add-opens` flags for JDK compiler module access
- Configured in `build.gradle` for seamless compilation

### Validation Rules
- Product names: 3-200 characters
- SKU format: Uppercase letters, numbers, and hyphens only
- Price: Must be positive
- Stock quantity: Cannot be negative
- Category names: Must be unique

### Low Stock Detection
Products with `stockQuantity < 10` are automatically flagged as low stock in API responses.

## Next Phase (Coming Soon)
- 🔐 JWT Authentication & User Management
- 📊 MongoDB Activity Logging
- 🎨 React Frontend
- 🐳 Docker Containerization
- ☸️ Kubernetes Deployment
- ☁️ CloudFormation/Terraform Templates

## Database Connection
Currently connected to **Neon PostgreSQL** serverless database (cloud-hosted).

## Author
Technical Assessment for Finconecta

---

**Status**: Phase 1 (Backend Foundation) - ✅ Complete
