package com.example.inventory_demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello World! Inventory System is running! 🚀";
    }

    @GetMapping("/status")
    public String status() {
        return "Status: OK - Application is working correctly";
    }
}