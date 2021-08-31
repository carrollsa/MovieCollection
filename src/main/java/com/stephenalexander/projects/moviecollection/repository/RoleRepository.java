package com.stephenalexander.projects.moviecollection.repository;

import com.stephenalexander.projects.moviecollection.entity.Role;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role, Long> {
    Role findByName(String name);
}
