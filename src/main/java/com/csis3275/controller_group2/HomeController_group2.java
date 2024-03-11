package com.csis3275.controller_group2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController_group2 {
	@GetMapping("/")
	public String Home(){
		return "";
	}
	
	public String Category() {
		return "";
	}
}
