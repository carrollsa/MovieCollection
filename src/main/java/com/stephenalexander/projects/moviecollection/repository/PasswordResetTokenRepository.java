package com.stephenalexander.projects.moviecollection.repository;

import com.stephenalexander.projects.moviecollection.entity.PasswordResetToken;
import com.stephenalexander.projects.moviecollection.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface PasswordResetTokenRepository extends CrudRepository<PasswordResetToken, Long> {
    PasswordResetToken findByToken(String token);

    PasswordResetToken findFirstByUserOrderByExpiryDateDesc(User user);
}
