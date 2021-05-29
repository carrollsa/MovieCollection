package com.stephenalexander.projects.movierecommender.movie;

import com.stephenalexander.projects.movierecommender.raters.Rater;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

    @Query("SELECT id FROM movie")
    Collection<Integer> getAllMovieIds();
}

