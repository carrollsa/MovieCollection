package com.stephenalexander.projects.moviecollection.service;

import com.stephenalexander.projects.moviecollection.entity.Movie;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public void addNewMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public Set<Movie> getAllMovies() {
        return movieRepository.getAllMovies();
    }

    public Optional<Movie> findById(String id) {
        return Optional.of(movieRepository.findById(id));
    }

    public Optional<List<Movie>> findByTitle(String title) {
        return Optional.of(movieRepository.findByTitleStartingWith(title));
    }

    public Optional<List<Movie>> findByTitleExact(String title) {
        return Optional.of(movieRepository.findByTitle(title));
    }

    public Optional<List<Movie>> findByTitleSnippet(String title) {
        return Optional.of(movieRepository.findByTitleSnippet(title));
    }
}
