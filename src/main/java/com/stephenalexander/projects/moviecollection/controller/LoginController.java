package com.stephenalexander.projects.moviecollection.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping
@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

//    @GetMapping("/login?failed")
//    public String showFailedLoginPage(Model model) {
//        model.addAttribute("loginError", true);
//        return "login";
//    }
//
//    @GetMapping("/login")
//    public String showLoginPage(Model model) {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication == null || authentication instanceof AnonymousAuthenticationFilter) {
//            return "login";
//        }
//        return "login";
//    }

    @GetMapping("/login?forgot-password")
    public String forgotPassword() {
        return "forgot-password";
    }
}
