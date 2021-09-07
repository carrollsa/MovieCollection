package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.dto.UserDto;
import com.stephenalexander.projects.moviecollection.entity.Role;
import com.stephenalexander.projects.moviecollection.entity.User;
import com.stephenalexander.projects.moviecollection.service.UserService;
import com.stephenalexander.projects.moviecollection.validation.RegistrationResult;
import com.stephenalexander.projects.moviecollection.web.error.UserAlreadyExistException;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @PostMapping("/user/save")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        URI uri =
                URI.create(ServletUriComponentsBuilder
                        .fromCurrentContextPath()
                        .path("/api/v1/user/save")
                        .toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(user));
    }

    @GetMapping("/user/registration")
    public String showRegistrationForm(WebRequest request, Model model) {
        return userService.showRegistrationForm(request, model);
    }

    //Remove model and deal only with DTO and validation?
    @PostMapping("/user/registration")
    public ResponseEntity registerUserAccount(@Valid UserDto userDto) {
        try {
            User registered = userService.registerNewUserAccount(userDto);
        } catch (UserAlreadyExistException uaeEx) {
            return ResponseEntity.of(Optional.of(new RegistrationResult(false)));
        }

        return ResponseEntity.of(Optional.of(new RegistrationResult(true)));
    }

    @PostMapping("/role/save")
    public ResponseEntity<Role> saveRole(@RequestBody Role role) {
        URI uri =
                URI.create(ServletUriComponentsBuilder
                        .fromCurrentContextPath()
                        .path("/api/v1/role/save")
                        .toUriString());
        return ResponseEntity.created(uri).body(userService.saveRole(role));
    }

    @PostMapping("/role/addtouser")
    public ResponseEntity<?> addRoleToUser(@RequestBody RoleToUserForm form) {
        userService.addRoleToUser(form.getUsername(), form.getRoleName());
        return ResponseEntity.ok().build();
    }
}

class RoleToUserForm {
    private String username;
    private String roleName;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}