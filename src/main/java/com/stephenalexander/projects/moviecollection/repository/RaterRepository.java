package com.stephenalexander.projects.moviecollection.repository;

import com.stephenalexander.projects.moviecollection.entity.Rater;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaterRepository extends CrudRepository<Rater, Long> {
}
