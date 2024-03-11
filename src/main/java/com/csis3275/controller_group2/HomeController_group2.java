package com.csis3275.controller_group2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.csis3275.model_group2.ProductDAO_group2;
import com.csis3275.model_group2.Product_group2;

@Controller
public class HomeController_group2 {
	
	@Autowired
	ProductDAO_group2 dao;
	
	@GetMapping("/")
	public String listAllProducts(Model model) {
		model.addAttribute("productList", dao.readAllProducts());
		return "";
	}
	
	@GetMapping("/products/delete")
	public String deleteProduct(@RequestParam("id") String idToDelete) {
		dao.deleteProduct(Long.parseLong(idToDelete));
		return "";
	}

	
	@GetMapping("/products/edit")
	public String editProduct(@RequestParam("id") String idToEdit, Model model) {
		// Retrieve the product by ID from the DAO
		Product_group2 productToEdit = dao.findProductById(Long.parseLong(idToEdit));
		
		// Add the product to the model
		model.addAttribute("product", productToEdit);
		
		// Return the view for editing the product
		return "";
	}
	
	@PostMapping("/products/update")
	public String updateProduct(@ModelAttribute("product") Product_group2 updatedProduct) {
	    // Update the student information in the database using the DAO
	    dao.editProduct(updatedProduct.getId(), updatedProduct);
	    
	    // Redirect the user back to the student list page after updating
	    return "";
	}
	
	@PostMapping("/products/add")
	public String addProduct(Product_group2 newProduct) {
		dao.createProduct(newProduct);
		
		return "";
	}
}
