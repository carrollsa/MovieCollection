package com.stephenalexander.projects.movierecommender.ratings;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingsRepository extends CrudRepository<Rating, Long> {

}
