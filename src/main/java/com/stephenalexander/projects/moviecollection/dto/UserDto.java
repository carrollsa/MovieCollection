package com.stephenalexander.projects.moviecollection.dto;

import com.stephenalexander.projects.moviecollection.validation.PasswordMatches;
import com.stephenalexander.projects.moviecollection.validation.ValidEmail;
import com.stephenalexander.projects.moviecollection.validation.ValidPassword;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@PasswordMatches
public class UserDto {
    @NotNull @NotEmpty @Pattern(regexp = "^[A-Za-z]+$", message = "Name must contain only letters")
    private String firstName;
    @NotNull @NotEmpty @Pattern(regexp = "^[A-Za-z]+$", message = "Name must contain only letters")
    private String lastName;
    @NotNull @NotEmpty @ValidPassword
    private String password;
    private String matchingPassword;
    @NotNull @NotEmpty @ValidEmail
    private String email;

    public UserDto(String firstName, String lastName, String password, String matchingPassword, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.matchingPassword = matchingPassword;
        this.email = email;
    }

    public UserDto() {

    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
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
