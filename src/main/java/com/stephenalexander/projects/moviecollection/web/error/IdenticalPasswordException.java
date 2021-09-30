package com.stephenalexander.projects.moviecollection.web.error;

public class IdenticalPasswordException extends RuntimeException {

    private static final long serialVersionUID = 5861310537366287163L;

    public IdenticalPasswordException() {
    }

    public IdenticalPasswordException(String message) {
        super(message);
    }

    public IdenticalPasswordException(String message, Throwable cause) {
        super(message, cause);
    }

    public IdenticalPasswordException(Throwable cause) {
        super(cause);
    }
}
