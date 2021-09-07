package com.stephenalexander.projects.moviecollection.validation;

public class RegistrationResult {
    private boolean success;

    public RegistrationResult(boolean success) {
        this.success = success;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
}