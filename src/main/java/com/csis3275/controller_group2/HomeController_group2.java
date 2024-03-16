package com.csis3275.controller_group2;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.csis3275.model_group2.ProductDAO_group2;
import com.csis3275.model_group2.Product_group2;

@RestController
public class HomeController_group2 {
	
	private final ProductDAO_group2 dao;

    public HomeController_group2(ProductDAO_group2 dao) {
        this.dao = dao;
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/")
    public List<Product_group2> listAllProducts() {
        return dao.readAllProducts();
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long idToDelete) {
        if (dao.findProductById(idToDelete) != null) {
            dao.deleteProduct(idToDelete);
            return ResponseEntity.ok("Product deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product_group2> editProduct(@PathVariable("id") Long idToEdit) {
        Product_group2 product = dao.findProductById(idToEdit);
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable("id") Long id, @RequestBody Product_group2 updatedProduct) {
        if (dao.findProductById(id) != null) {
            dao.editProduct(id, updatedProduct);
            return ResponseEntity.ok("Product updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Product not found");
        }
    }

    @PostMapping("/products")
    public ResponseEntity<String> addProduct(@RequestBody Product_group2 newProduct) {
        dao.createProduct(newProduct);
        return ResponseEntity.status(HttpStatus.CREATED).body("Product added successfully");
    }
    
    @DeleteMapping("/deleteproducts")
    public ResponseEntity<String> deleteAllProducts(@RequestBody List<Long> idsToDelete) {
        for (Long id : idsToDelete) {
            if (dao.findProductById(id) != null) {
                dao.deleteProduct(id);
            }
        }
        return ResponseEntity.ok("Products deleted successfully");
    }
}
