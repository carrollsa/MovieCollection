package com.stephenalexander.projects.moviecollection.service;

import com.stephenalexander.projects.moviecollection.entity.Role;
import com.stephenalexander.projects.moviecollection.entity.User;
import org.springframework.ui.Model;
import org.springframework.web.context.request.WebRequest;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
    String showRegistrationForm(WebRequest request, Model model);
}