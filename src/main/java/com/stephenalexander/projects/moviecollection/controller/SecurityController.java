package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.service.IUserSecurityService;
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
    private IUserSecurityService userSecurityService;

    public SecurityController(IUserSecurityService userSecurityService) {
        this.userSecurityService = userSecurityService;
    }

    @GetMapping(value = "/username")
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }

    @GetMapping("/user/change-password")
    public ModelAndView showChangePasswordPage(final ModelMap model, @RequestParam("token") final String token) {
        final String negativeValidationResultOrNull = userSecurityService.validatePasswordResetToken(token);

        if(negativeValidationResultOrNull != null) {
            String messageKey = "auth.message." + negativeValidationResultOrNull;
            model.addAttribute("messageKey", messageKey);
            return new ModelAndView("redirect:/login", model);
        } else {
            model.addAttribute("token", token);
            return new ModelAndView("redirect:/updatePassword");
        }
    }

}
