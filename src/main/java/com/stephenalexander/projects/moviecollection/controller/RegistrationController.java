package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.dto.UserDto;
import com.stephenalexander.projects.moviecollection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@RequestMapping("/register")
@Controller
public class RegistrationController {

    private UserService userService;

    @Autowired
    public RegistrationController(UserService userService) {
        this.userService = userService;
    }

    @ModelAttribute("user")
    public UserDto userDto() {
        return new UserDto();
    }

    @GetMapping
    public String showRegistrationPage() {
        return "registration";
    }

    @PostMapping
    public String registerUserAccount(@ModelAttribute("user") @Valid UserDto userDto, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            return "registration";
        }

        userService.registerNewUserAccount(userDto);

        return "redirect:/login?registrationSuccessful";
    }
}
