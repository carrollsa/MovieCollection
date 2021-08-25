package com.stephenalexander.projects.moviecollection.rater;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaterRepository extends CrudRepository<Rater, Long> {
}
