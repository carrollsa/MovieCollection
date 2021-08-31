package com.stephenalexander.projects.moviecollection.user;

import com.stephenalexander.projects.moviecollection.role.Role;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
}