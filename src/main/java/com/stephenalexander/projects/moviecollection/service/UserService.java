package com.stephenalexander.projects.moviecollection.service;

import com.stephenalexander.projects.moviecollection.dto.UserDto;
import com.stephenalexander.projects.moviecollection.entity.Role;
import com.stephenalexander.projects.moviecollection.entity.User;
import com.stephenalexander.projects.moviecollection.web.error.UserAlreadyExistException;
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
    User registerNewUserAccount(UserDto userDto) throws UserAlreadyExistException;
    User findUserByEmail(String userEmail);
    void createPasswordResetTokenForUser(User user, String token);
}