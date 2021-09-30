package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.dto.PasswordDto;
import com.stephenalexander.projects.moviecollection.entity.PasswordResetToken;
import com.stephenalexander.projects.moviecollection.entity.User;
import com.stephenalexander.projects.moviecollection.service.UserSecurityService;
import com.stephenalexander.projects.moviecollection.service.UserService;
import com.stephenalexander.projects.moviecollection.web.error.IdenticalPasswordException;
import com.stephenalexander.projects.moviecollection.web.util.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.Locale;
import java.util.Optional;
import java.util.UUID;

@RestController
public class RegistrationRestController {
    @Autowired
    private MessageSource messages;

    @Autowired
    private Environment env;

    @Autowired
    private JavaMailSender mailSender;

    private final UserService userService;
    private final UserSecurityService userSecurityService;

    @Autowired
    public RegistrationRestController(UserService userService, UserSecurityService userSecurityService) {
        this.userService = userService;
        this.userSecurityService = userSecurityService;
    }


    @PostMapping("/forgot-password/reset")
    public GenericResponse resetPassword(final HttpServletRequest request,
                                         @RequestParam(value= "email") final String userEmail) {
        final User user = userService.findUserByEmail(userEmail);
        if (user != null) {
            PasswordResetToken existingToken = userSecurityService.findTokenByUser(user);
            if(validTokenExists(existingToken)) {
                mailSender.send(constructResetTokenEmail(getAppUrl(request), request.getLocale(), existingToken.getToken(),
                        user));
                return new GenericResponse(messages.getMessage("auth.message.validTokenAlreadyExists",
                        null,
                        request.getLocale()));
            } else {
                final String token = UUID.randomUUID().toString();
                userService.createPasswordResetTokenForUser(user, token);
                mailSender.send(constructResetTokenEmail(getAppUrl(request), request.getLocale(), token, user));
            }
        }
        return new GenericResponse(messages.getMessage("message.resetPasswordEmailSent", null, request.getLocale()));
    }

    @PostMapping("/update-password")
    public GenericResponse updatePassword(final Locale locale, @RequestBody @Valid PasswordDto passwordDto) {
        String validationResult = userSecurityService.validatePasswordResetToken(passwordDto.getToken());

        if(validationResult != null) {
            return new GenericResponse(messages.getMessage("auth.message." + validationResult, null, locale));
        }

        Optional<User> user = userService.getUserByPasswordResetToken(passwordDto.getToken());
        if(user.isPresent()) {
            if(newPasswordIsIdentical(user.get(), passwordDto.getNewPassword())) {
//                return new GenericResponse(messages.getMessage("auth.message.newPasswordIdentical", null, locale))
                throw new IdenticalPasswordException("New password must differ from old password.");
            }
            userService.changeUserPassword(user.get(), passwordDto.getNewPassword());
            //TODO: Is this okay?
            userService.invalidateToken(passwordDto.getToken());
            return new GenericResponse(messages.getMessage("login.message.resetPasswordSuccess", null, locale));
        } else {
            return new GenericResponse(messages.getMessage("auth.message.invalidToken", null, locale));
        }
    }

    private boolean newPasswordIsIdentical(User user, String newPassword) {
        return userService.newPasswordIdentical(user, newPassword);
    }

    private boolean validTokenExists(PasswordResetToken existingToken) {
        return existingToken != null && existingToken.isValid();
    }

    private SimpleMailMessage constructResetTokenEmail(final String contextPath, final Locale locale, final String token, final User user) {
        final String url = contextPath + "/user/change-password?token=" + token;
        final String message = messages.getMessage("message.resetPasswordEmailText", null, locale);
        return constructEmail("Reset Password", message + " \r\n" + url, user);
    }

    private SimpleMailMessage constructEmail(String subject, String body, User user) {
        final SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(subject);
        email.setText(body);
        email.setTo(user.getUsername());
        email.setFrom(env.getProperty("support.email"));
        return email;
    }

    private String getAppUrl(HttpServletRequest request) {
        return "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    }
}
