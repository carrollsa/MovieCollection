package com.stephenalexander.projects.moviecollection.controller;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.security.Principal;

@Controller
public class SecurityController {

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }

//    @GetMapping(value = "/username")
//    @ResponseBody
//    public String currentUserName(Authentication authentication) {
//        return authentication.getName();
//    }
}
