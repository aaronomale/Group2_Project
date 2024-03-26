package com.csis3275;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.csis3275.model_group2.ProductDAO_group2;
import com.csis3275.model_group2.Product_group2;

@SpringBootApplication
public class FinalProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalProjectApplication.class, args);
	}
	
	@Bean
	CommandLineRunner product(ProductDAO_group2 dao) {
	    return (args) -> {
	        // Create products with meaningful names, matching categories, and prices
	    	dao.createProduct(new Product_group2("Milk", "Fresh from the farm", "Dairy", 10, 10.99));
	    	dao.createProduct(new Product_group2("Spaghetti", "Italian-style pasta", "Pasta & Grains", 5, 5.99));
	    	dao.createProduct(new Product_group2("Apple", "Fresh and crunchy", "Produce", 15, 2.49));
	    	dao.createProduct(new Product_group2("Eggs", "Free-range eggs", "Dairy", 8, 3.99));
	    	dao.createProduct(new Product_group2("Bread", "Whole-grain bread", "Bakery", 12, 4.49));
	    	dao.createProduct(new Product_group2("Chicken Breast", "Boneless and skinless", "Meat", 10, 7.99));
	    	dao.createProduct(new Product_group2("Orange Juice", "100% natural", "Beverages", 16, 3.99));
	    	dao.createProduct(new Product_group2("Carrots", "Organic and fresh", "Produce", 6, 1.99));
	    	dao.createProduct(new Product_group2("Yogurt", "Creamy and delicious", "Dairy", 7, 2.99));
	    	dao.createProduct(new Product_group2("Rice", "Long grain rice", "Pasta & Grains", 11, 6.99));
	    	dao.createProduct(new Product_group2("Banana", "Ripe and sweet", "Produce", 13, 0.99));
	    	dao.createProduct(new Product_group2("Cheese", "Aged cheddar", "Dairy", 9, 8.99));
	    	dao.createProduct(new Product_group2("Baguette", "French-style bread", "Bakery", 5, 3.49));
	    	dao.createProduct(new Product_group2("Pork Chops", "Tender and juicy", "Meat", 14, 9.99));
	    	dao.createProduct(new Product_group2("Apple Juice", "Made from freshly pressed apples", "Beverages", 18, 4.99));
	    	dao.createProduct(new Product_group2("Lettuce", "Crisp and green", "Produce", 3, 1.49));
	    	dao.createProduct(new Product_group2("Butter", "Creamy and smooth", "Dairy", 20, 4.99));
	    	dao.createProduct(new Product_group2("Pasta", "Al dente pasta", "Pasta & Grains", 16, 3.99));
	    	dao.createProduct(new Product_group2("Grapes", "Sweet and seedless", "Produce", 8, 5.99));
	    	dao.createProduct(new Product_group2("Ham", "Smoked and sliced", "Meat", 17, 6.99));
	    	dao.createProduct(new Product_group2("Iced Tea", "Refreshing and flavorful", "Beverages", 12, 2.99));
	    	dao.createProduct(new Product_group2("Broccoli", "Nutritious and delicious", "Produce", 9, 2.99));
	    	dao.createProduct(new Product_group2("Sour Cream", "Rich and tangy", "Dairy", 2, 3.99));
	    	dao.createProduct(new Product_group2("Quinoa", "Superfood grain", "Pasta & Grains", 18, 9.99));
	    	dao.createProduct(new Product_group2("Pineapple", "Juicy and tropical", "Produce", 7, 3.99));
	    	dao.createProduct(new Product_group2("Salmon", "Fresh and flaky", "Seafood", 10, 12.99));
	    	dao.createProduct(new Product_group2("Coffee", "Bold and aromatic", "Beverages", 15, 7.99));
	    	dao.createProduct(new Product_group2("Cucumber", "Crisp and refreshing", "Produce", 11, 0.99));
	    	dao.createProduct(new Product_group2("Cream Cheese", "Smooth and creamy", "Dairy", 16, 5.99));
	    	dao.createProduct(new Product_group2("Couscous", "Versatile grain", "Pasta & Grains", 19, 4.99));
	    	dao.createProduct(new Product_group2("Watermelon", "Sweet and hydrating", "Produce", 4, 6.99));
	    	dao.createProduct(new Product_group2("Shrimp", "Tender and succulent", "Seafood", 15, 14.99));
	    	dao.createProduct(new Product_group2("Tea", "Calming and soothing", "Beverages", 13, 3.99));
	    	dao.createProduct(new Product_group2("Bell Pepper", "Colorful and crunchy", "Produce", 6, 2.99));
	    	dao.createProduct(new Product_group2("Sour Cream", "Rich and tangy", "Dairy", 17, 3.99));
	    	dao.createProduct(new Product_group2("Lasagna", "Layered with goodness", "Pasta & Grains", 20, 8.99));
	    	dao.createProduct(new Product_group2("Strawberries", "Sweet and juicy", "Produce", 9, 4.99));
	    	dao.createProduct(new Product_group2("Tilapia", "Mild and flaky", "Seafood", 18, 9.99));
	    	dao.createProduct(new Product_group2("Lemonade", "Refreshing citrus drink", "Beverages", 16, 2.99));
	    	dao.createProduct(new Product_group2("Tomato", "Fresh and ripe", "Produce", 14, 1.99));
	    	dao.createProduct(new Product_group2("Cream", "Rich and creamy", "Dairy", 15, 4.99));
	    	dao.createProduct(new Product_group2("Ramen", "Japanese-style noodles", "Pasta & Grains", 3, 3.99));
	    	dao.createProduct(new Product_group2("Blueberries", "Antioxidant-rich berries", "Produce", 10, 6.99));
	    	dao.createProduct(new Product_group2("Cod", "Flaky white fish", "Seafood", 19, 10.99));
	    	dao.createProduct(new Product_group2("Hot Chocolate", "Rich and indulgent", "Beverages", 12, 4.99));
	    	dao.createProduct(new Product_group2("Zucchini", "Versatile vegetable", "Produce", 8, 1.99));
	    	dao.createProduct(new Product_group2("Mozzarella", "Soft and creamy cheese", "Dairy", 13, 7.99));
	    	dao.createProduct(new Product_group2("Cereal", "Morning favorite", "Pasta & Grains", 5, 5.99));
	    	dao.createProduct(new Product_group2("Blackberries", "Sweet and tart", "Produce", 17, 5.99));
	    	dao.createProduct(new Product_group2("Tuna", "Versatile canned fish", "Seafood", 14, 6.99));
	    	dao.createProduct(new Product_group2("Iced Coffee", "Cold and refreshing", "Beverages", 20, 3.99));
	    	dao.createProduct(new Product_group2("Onion", "Versatile cooking staple", "Produce", 18, 0.99));
	    	dao.createProduct(new Product_group2("Cheddar", "Sharp and tangy cheese", "Dairy", 7, 8.99));
	    	dao.createProduct(new Product_group2("Risotto", "Creamy Italian rice dish", "Pasta & Grains", 10, 7.99));
	    	dao.createProduct(new Product_group2("Raspberries", "Sweet and tart berries", "Produce", 6, 6.99));
	    	dao.createProduct(new Product_group2("Salmon Fillet", "Premium cut of fish", "Seafood", 8, 16.99));
	    	dao.createProduct(new Product_group2("Lemonade Mix", "Convenient powdered mix", "Beverages", 11, 3.99));
	    	dao.createProduct(new Product_group2("Garlic", "Flavorful bulb", "Produce", 14, 0.99));
	    	dao.createProduct(new Product_group2("Parmesan", "Aged Italian cheese", "Dairy", 12, 6.99));
	    	dao.createProduct(new Product_group2("Macaroni", "Classic pasta shape", "Pasta & Grains", 13, 4.99));
	    	dao.createProduct(new Product_group2("Cranberries", "Tart and tangy berries", "Produce", 15, 5.99));
	    	dao.createProduct(new Product_group2("Sardines", "Small fish with big flavor", "Seafood", 19, 3.99));
	    	dao.createProduct(new Product_group2("Green Tea", "Antioxidant-rich beverage", "Beverages", 17, 2.99));
	    	dao.createProduct(new Product_group2("Potato", "Versatile vegetable", "Produce", 16, 2.99));
	    	dao.createProduct(new Product_group2("Creamer", "Creamy coffee addition", "Dairy", 5, 3.99));
	    	dao.createProduct(new Product_group2("Linguine", "Flat Italian pasta", "Pasta & Grains", 10, 5.99));
	    	dao.createProduct(new Product_group2("Pomegranate", "Sweet and tangy fruit", "Produce", 14, 4.99));
	    	dao.createProduct(new Product_group2("Tilapia Fillet", "Mild white fish", "Seafood", 9, 11.99));
	    	dao.createProduct(new Product_group2("Sparkling Water", "Refreshing carbonated drink", "Beverages", 8, 1.99));
	    	dao.createProduct(new Product_group2("Sweet Potato", "Nutritious root vegetable", "Produce", 11, 2.99));
	    	dao.createProduct(new Product_group2("Half-and-Half", "Rich coffee creamer", "Dairy", 7, 3.99));
	    	dao.createProduct(new Product_group2("Farfalle", "Bowtie pasta", "Pasta & Grains", 6, 4.99));
	    	dao.createProduct(new Product_group2("Mango", "Sweet tropical fruit", "Produce", 5, 3.99));
	    	dao.createProduct(new Product_group2("Mahi Mahi", "Flavorful ocean fish", "Seafood", 20, 13.99));
	    	dao.createProduct(new Product_group2("Energy Drink", "Boost of energy", "Beverages", 18, 2.99));
	    	dao.createProduct(new Product_group2("Cabbage", "Crisp and crunchy", "Produce", 19, 1.99));
	    	dao.createProduct(new Product_group2("Whipped Cream", "Light and fluffy topping", "Dairy", 14, 4.99));
	    	dao.createProduct(new Product_group2("Penne", "Tube-shaped pasta", "Pasta & Grains", 12, 4.99));
	    	dao.createProduct(new Product_group2("Kiwi", "Tangy and sweet fruit", "Produce", 10, 2.99));
	    	dao.createProduct(new Product_group2("Trout", "Freshwater fish", "Seafood", 11, 10.99));
	    	dao.createProduct(new Product_group2("Coconut Water", "Hydrating tropical drink", "Beverages", 13, 3.99));
	    	dao.createProduct(new Product_group2("Spinach", "Nutrient-rich greens", "Produce", 18, 2.99));
	    	dao.createProduct(new Product_group2("Vanilla Ice Cream", "Classic dessert", "Dairy", 17, 5.99));
	    	dao.createProduct(new Product_group2("Lasagna Noodles", "Wide pasta sheets", "Pasta & Grains", 15, 5.99));
	    	dao.createProduct(new Product_group2("Pear", "Sweet and juicy fruit", "Produce", 16, 3.99));
	    	dao.createProduct(new Product_group2("Catfish", "Southern favorite", "Seafood", 14, 8.99));
	    	dao.createProduct(new Product_group2("Sports Drink", "Rehydrating beverage", "Beverages", 17, 2.99));
	    	dao.createProduct(new Product_group2("Bell Pepper", "Colorful and crunchy", "Produce", 13, 1.99));
	    	dao.createProduct(new Product_group2("Whipped Topping", "Light and creamy topping", "Dairy", 10, 2.99));
	    	dao.createProduct(new Product_group2("Fettuccine", "Wide Italian pasta", "Pasta & Grains", 11, 5.99));
	    	dao.createProduct(new Product_group2("Cantaloupe", "Sweet and refreshing", "Produce", 12, 4.99));
	    	dao.createProduct(new Product_group2("Cod Fillet", "Flaky white fish", "Seafood", 20, 12.99));
	    	dao.createProduct(new Product_group2("Soda", "Fizzy and sweet", "Beverages", 19, 1.99));
	    	dao.createProduct(new Product_group2("Cauliflower", "Versatile vegetable", "Produce", 16, 2.99));
	    	dao.createProduct(new Product_group2("Cream Cheese Spread", "Smooth and creamy", "Dairy", 18, 5.99));
	    	dao.createProduct(new Product_group2("Rigatoni", "Tubular pasta", "Pasta & Grains", 17, 4.99));
	    	dao.createProduct(new Product_group2("Grapefruit", "Tart and tangy fruit", "Produce", 20, 3.99));
	    	dao.createProduct(new Product_group2("Halibut", "Flavorful ocean fish", "Seafood", 18, 15.99));
	    	dao.createProduct(new Product_group2("Juice Box", "Convenient drink pouch", "Beverages", 19, 3.99));
	    	dao.createProduct(new Product_group2("Brussels Sprouts", "Nutrient-packed vegetable", "Produce", 20, 3.99));
	    	dao.createProduct(new Product_group2("Sour Cream Dip", "Creamy party dip", "Dairy", 15, 4.99));

	    };
	}
}
