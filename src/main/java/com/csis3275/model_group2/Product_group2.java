package com.csis3275.model_group2;

public class Product_group2 {
	private String name;
	private String description;
	private String category;
	private int quantity;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Product_group2(String name, String description, String category, int quantity) {
		super();
		this.name = name;
		this.description = description;
		this.category = category;
		this.quantity = quantity;
	}
	
	
}
