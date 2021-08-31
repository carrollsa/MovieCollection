package com.stephenalexander.projects.moviecollection.dto;


public class UserDto {
//    @NotNull @NotEmpty
    private String name;
//    @NotNull @NotEmpty
    private String password;
    private String matchingPassword;
//    @NotNull @NotEmpty
    private String email;

    public UserDto(String name, String password, String matchingPassword, String email) {
        this.name = name;
        this.password = password;
        this.matchingPassword = matchingPassword;
        this.email = email;
    }

    public UserDto() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getMatchingPassword() {
        return matchingPassword;
    }

    public void setMatchingPassword(String matchingPassword) {
        this.matchingPassword = matchingPassword;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
