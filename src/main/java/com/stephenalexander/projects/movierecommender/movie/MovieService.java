package com.stephenalexander.projects.movierecommender.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Set<Movie> getTopMovies() {
        return movieRepository.getTopMovies();
    }

    public Set<Movie> getAllMovies() {
        return movieRepository.getAllMovies();
    }

    public Optional<Movie> findById(int id) {
        return movieRepository.findById(id);
    }
}
