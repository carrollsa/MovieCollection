package com.stephenalexander.projects.moviecollection.validation;

import com.stephenalexander.projects.moviecollection.dto.UserDto;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordMatchesValidator implements ConstraintValidator<PasswordMatches, Object> {

    @Override
    public void initialize(final PasswordMatches constraintAnnotation) {
        //
    }

    @Override
    public boolean isValid(final Object obj, final ConstraintValidatorContext context) {
        final UserDto user = (UserDto) obj;
        if (user.getPassword().equals(user.getMatchingPassword())) {
            return true;
        }

        context.buildConstraintViolationWithTemplate("Passwords must match.")
                .addConstraintViolation()
                .disableDefaultConstraintViolation();

        return false;
    }

}
