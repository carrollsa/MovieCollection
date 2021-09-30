package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.service.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class SecurityController {

    @Autowired
    private UserSecurityService userSecurityService;

    public SecurityController(UserSecurityService userSecurityService) {
        this.userSecurityService = userSecurityService;
    }

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }

    @GetMapping("/user/change-password")
    public ModelAndView showChangePasswordPage(final ModelMap model, @RequestParam("token") final String token) {
        final String validationResult = userSecurityService.validatePasswordResetToken(token);

        if(validationResult != null) {
            String message = "auth.message." + validationResult;
            model.addAttribute("tokenError", message);
            return new ModelAndView("redirect:/login", model);
        } else {
            model.addAttribute("token", token);
            return new ModelAndView("redirect:/update-password", model);
        }
    }
}
