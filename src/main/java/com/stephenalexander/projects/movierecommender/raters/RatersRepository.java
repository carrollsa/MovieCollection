package com.stephenalexander.projects.movierecommender.raters;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatersRepository extends CrudRepository<Rater, Long> {

}

