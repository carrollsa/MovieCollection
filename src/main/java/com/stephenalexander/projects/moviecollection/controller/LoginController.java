package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.web.util.GenericResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

@RequestMapping
@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    @GetMapping("/forgot-password")
    public String showForgotPassword() { return "forgot-password"; }

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
