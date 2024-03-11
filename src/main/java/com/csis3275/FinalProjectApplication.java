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
			 	dao.createProduct(new Product_group2("Milk", "Fresh from the farm", "Dairy", 10));
	            dao.createProduct(new Product_group2("Spaghetti", "Italian-style pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Apple", "Fresh and crunchy", "Produce", 10));
	            dao.createProduct(new Product_group2("Eggs", "Free-range eggs", "Dairy", 12));
	            dao.createProduct(new Product_group2("Bread", "Whole-grain bread", "Bakery", 15));
	            dao.createProduct(new Product_group2("Chicken Breast", "Boneless and skinless", "Meat", 8));
	            dao.createProduct(new Product_group2("Orange Juice", "100% natural", "Beverages", 5));
	            dao.createProduct(new Product_group2("Carrots", "Organic and fresh", "Produce", 20));
	            dao.createProduct(new Product_group2("Yogurt", "Creamy and delicious", "Dairy", 10));
	            dao.createProduct(new Product_group2("Rice", "Long grain rice", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Banana", "Ripe and sweet", "Produce", 10));
	            dao.createProduct(new Product_group2("Cheese", "Aged cheddar", "Dairy", 10));
	            dao.createProduct(new Product_group2("Baguette", "French-style bread", "Bakery", 10));
	            dao.createProduct(new Product_group2("Pork Chops", "Tender and juicy", "Meat", 10));
	            dao.createProduct(new Product_group2("Apple Juice", "Made from freshly pressed apples", "Beverages", 10));
	            dao.createProduct(new Product_group2("Lettuce", "Crisp and green", "Produce", 10));
	            dao.createProduct(new Product_group2("Butter", "Creamy and smooth", "Dairy", 10));
	            dao.createProduct(new Product_group2("Pasta", "Al dente pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Grapes", "Sweet and seedless", "Produce", 10));
	            dao.createProduct(new Product_group2("Ham", "Smoked and sliced", "Meat", 10));
	            dao.createProduct(new Product_group2("Iced Tea", "Refreshing and flavorful", "Beverages", 10));
	            dao.createProduct(new Product_group2("Broccoli", "Nutritious and delicious", "Produce", 10));
	            dao.createProduct(new Product_group2("Sour Cream", "Rich and tangy", "Dairy", 10));
	            dao.createProduct(new Product_group2("Quinoa", "Superfood grain", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Pineapple", "Juicy and tropical", "Produce", 10));
	            dao.createProduct(new Product_group2("Salmon", "Fresh and flaky", "Seafood", 10));
	            dao.createProduct(new Product_group2("Coffee", "Bold and aromatic", "Beverages", 10));
	            dao.createProduct(new Product_group2("Cucumber", "Crisp and refreshing", "Produce", 10));
	            dao.createProduct(new Product_group2("Cream Cheese", "Smooth and creamy", "Dairy", 10));
	            dao.createProduct(new Product_group2("Couscous", "Versatile grain", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Watermelon", "Sweet and hydrating", "Produce", 10));
	            dao.createProduct(new Product_group2("Shrimp", "Tender and succulent", "Seafood", 10));
	            dao.createProduct(new Product_group2("Tea", "Calming and soothing", "Beverages", 10));
	            dao.createProduct(new Product_group2("Bell Pepper", "Colorful and crunchy", "Produce", 10));
	            dao.createProduct(new Product_group2("Sour Cream", "Rich and tangy", "Dairy", 10));
	            dao.createProduct(new Product_group2("Lasagna", "Layered with goodness", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Strawberries", "Sweet and juicy", "Produce", 10));
	            dao.createProduct(new Product_group2("Tilapia", "Mild and flaky", "Seafood", 10));
	            dao.createProduct(new Product_group2("Lemonade", "Refreshing citrus drink", "Beverages", 10));
	            dao.createProduct(new Product_group2("Tomato", "Fresh and ripe", "Produce", 10));
	            dao.createProduct(new Product_group2("Cream", "Rich and creamy", "Dairy", 10));
	            dao.createProduct(new Product_group2("Ramen", "Japanese-style noodles", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Blueberries", "Antioxidant-rich berries", "Produce", 10));
	            dao.createProduct(new Product_group2("Cod", "Flaky white fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Hot Chocolate", "Rich and indulgent", "Beverages", 10));
	            dao.createProduct(new Product_group2("Zucchini", "Versatile vegetable", "Produce", 10));
	            dao.createProduct(new Product_group2("Mozzarella", "Soft and creamy cheese", "Dairy", 10));
	            dao.createProduct(new Product_group2("Cereal", "Morning favorite", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Blackberries", "Sweet and tart", "Produce", 10));
	            dao.createProduct(new Product_group2("Tuna", "Versatile canned fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Iced Coffee", "Cold and refreshing", "Beverages", 10));
	            dao.createProduct(new Product_group2("Onion", "Versatile cooking staple", "Produce", 10));
	            dao.createProduct(new Product_group2("Cheddar", "Sharp and tangy cheese", "Dairy", 10));
	            dao.createProduct(new Product_group2("Risotto", "Creamy Italian rice dish", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Raspberries", "Sweet and tart berries", "Produce", 10));
	            dao.createProduct(new Product_group2("Salmon Fillet", "Premium cut of fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Lemonade Mix", "Convenient powdered mix", "Beverages", 10));
	            dao.createProduct(new Product_group2("Garlic", "Flavorful bulb", "Produce", 10));
	            dao.createProduct(new Product_group2("Parmesan", "Aged Italian cheese", "Dairy", 10));
	            dao.createProduct(new Product_group2("Macaroni", "Classic pasta shape", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Cranberries", "Tart and tangy berries", "Produce", 10));
	            dao.createProduct(new Product_group2("Sardines", "Small fish with big flavor", "Seafood", 10));
	            dao.createProduct(new Product_group2("Green Tea", "Antioxidant-rich beverage", "Beverages", 10));
	            dao.createProduct(new Product_group2("Potato", "Versatile vegetable", "Produce", 10));
	            dao.createProduct(new Product_group2("Creamer", "Creamy coffee addition", "Dairy", 10));
	            dao.createProduct(new Product_group2("Linguine", "Flat Italian pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Pomegranate", "Sweet and tangy fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Tilapia Fillet", "Mild white fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Sparkling Water", "Refreshing carbonated drink", "Beverages", 10));
	            dao.createProduct(new Product_group2("Sweet Potato", "Nutritious root vegetable", "Produce", 10));
	            dao.createProduct(new Product_group2("Half-and-Half", "Rich coffee creamer", "Dairy", 10));
	            dao.createProduct(new Product_group2("Farfalle", "Bowtie pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Mango", "Sweet tropical fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Mahi Mahi", "Flavorful ocean fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Energy Drink", "Boost of energy", "Beverages", 10));
	            dao.createProduct(new Product_group2("Cabbage", "Crisp and crunchy", "Produce", 10));
	            dao.createProduct(new Product_group2("Whipped Cream", "Light and fluffy topping", "Dairy", 10));
	            dao.createProduct(new Product_group2("Penne", "Tube-shaped pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Kiwi", "Tangy and sweet fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Trout", "Freshwater fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Coconut Water", "Hydrating tropical drink", "Beverages", 10));
	            dao.createProduct(new Product_group2("Spinach", "Nutrient-rich greens", "Produce", 10));
	            dao.createProduct(new Product_group2("Vanilla Ice Cream", "Classic dessert", "Dairy", 10));
	            dao.createProduct(new Product_group2("Lasagna Noodles", "Wide pasta sheets", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Pear", "Sweet and juicy fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Catfish", "Southern favorite", "Seafood", 10));
	            dao.createProduct(new Product_group2("Sports Drink", "Rehydrating beverage", "Beverages", 10));
	            dao.createProduct(new Product_group2("Bell Pepper", "Colorful and crunchy", "Produce", 10));
	            dao.createProduct(new Product_group2("Whipped Topping", "Light and creamy topping", "Dairy", 10));
	            dao.createProduct(new Product_group2("Fettuccine", "Wide Italian pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Cantaloupe", "Sweet and refreshing", "Produce", 10));
	            dao.createProduct(new Product_group2("Cod Fillet", "Flaky white fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Soda", "Fizzy and sweet", "Beverages", 10));
	            dao.createProduct(new Product_group2("Cauliflower", "Versatile vegetable", "Produce", 10));
	            dao.createProduct(new Product_group2("Cream Cheese Spread", "Smooth and creamy", "Dairy", 10));
	            dao.createProduct(new Product_group2("Rigatoni", "Tubular pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Grapefruit", "Tart and tangy fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Halibut", "Flavorful ocean fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Juice Box", "Convenient drink pouch", "Beverages", 10));
	            dao.createProduct(new Product_group2("Brussels Sprouts", "Nutrient-packed vegetable", "Produce", 10));
	            dao.createProduct(new Product_group2("Sour Cream Dip", "Creamy party dip", "Dairy", 10));
	            dao.createProduct(new Product_group2("Tortellini", "Stuffed Italian pasta", "Pasta & Grains", 10));
	            dao.createProduct(new Product_group2("Peach", "Sweet and juicy fruit", "Produce", 10));
	            dao.createProduct(new Product_group2("Swordfish", "Firm and flavorful fish", "Seafood", 10));
	            dao.createProduct(new Product_group2("Energy Shot", "Quick energy boost", "Beverages", 10));
		};
		}

}
