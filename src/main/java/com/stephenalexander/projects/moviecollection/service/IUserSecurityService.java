package com.stephenalexander.projects.moviecollection.service;

public interface IUserSecurityService {

    String validatePasswordResetToken(String token);

}
