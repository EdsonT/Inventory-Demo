package com.example.inventory_demo.repository;

import com.example.inventory_demo.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // Find product by SKU
    Optional<Product> findBySku(String sku);

    // Find products by category
    List<Product> findByCategoryId(Long categoryId);

    // Find low stock products (stock < threshold)
    @Query("SELECT p FROM Product p WHERE p.stockQuantity < :threshold")
    List<Product> findLowStockProducts(@Param("threshold") Integer threshold);

    // Search products by name or description (case-insensitive)
    @Query("SELECT p FROM Product p WHERE LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
           "OR LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Product> searchProducts(@Param("keyword") String keyword);

    // Find products within price range
    List<Product> findByPriceBetween(Double minPrice, Double maxPrice);

    // Check if SKU exists (for validation)
    boolean existsBySku(String sku);

    // Get products by category name
    @Query("SELECT p FROM Product p JOIN p.category c WHERE c.name = :categoryName")
    List<Product> findByCategoryName(@Param("categoryName") String categoryName);
}
