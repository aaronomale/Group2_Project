package com.csis3275.model_group2;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductDAO_group2 {
	
	@Autowired
	private IProductRepository productRepository;
	
	public Product_group2 createProduct(Product_group2 newProduct) {
		return productRepository.save(newProduct);
	}
	
	public List<Product_group2> readAllProducts(){
		return (List<Product_group2>) productRepository.findAll();
	}
	
	public void deleteProduct(long idToDelete) {
		productRepository.deleteById(idToDelete);
	}
	
	public Product_group2 findProductById(long idTo) {
	    Optional<Product_group2> optionalProduct = productRepository.findById(idTo);
	    return optionalProduct.orElse(null);
	}
	
	public void editProduct(long idToEdit, Product_group2 updatedProductInfo) {
	    Optional<Product_group2> optionalProduct = productRepository.findById(idToEdit);
	    if (optionalProduct.isPresent()) {
	        Product_group2 existingProduct = optionalProduct.get();
	        // Update the properties of the existing product with the new information
	        existingProduct.setName(updatedProductInfo.getName());
	        existingProduct.setDescription(updatedProductInfo.getDescription());
	        existingProduct.setCategory(updatedProductInfo.getCategory());
	        existingProduct.setQuantity(updatedProductInfo.getQuantity());
	        existingProduct.setListPrice(updatedProductInfo.getListPrice());
	        // Save the updated student entity back to the database
	        productRepository.save(existingProduct);
	    } else {
	        // Handle the case where the product with the given ID is not found
	    	System.out.println("The product with the given ID was not found.");
	    }
	}
	 
	public void deleteAllProducts(List<Long> idsToDelete) {
	        for (Long id : idsToDelete) {
	            deleteProduct(id);
	        }
	    }
	
}
