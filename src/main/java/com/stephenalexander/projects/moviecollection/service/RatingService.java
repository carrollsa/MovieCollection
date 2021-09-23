package com.stephenalexander.projects.moviecollection.service;

import com.stephenalexander.projects.moviecollection.entity.Movie;
import com.stephenalexander.projects.moviecollection.entity.Rating;
import com.stephenalexander.projects.moviecollection.entity.User;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.repository.RatingRepository;
import com.stephenalexander.projects.moviecollection.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.security.Principal;
import java.sql.SQLOutput;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public class RatingService {

    private final RatingRepository ratingRepository;
    private final MovieRepository movieRepository;
    private final UserRepository userRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository, MovieRepository movieRepository, UserRepository userRepository) {
        this.ratingRepository = ratingRepository;
        this.movieRepository = movieRepository;
        this.userRepository = userRepository;
    }

    public void addNewRating(Rating rating) {
        ratingRepository.save(rating);
    }

    public void addOrUpdate(Map<String, String> jsonBody, Principal principal) {
        Movie movie = movieRepository.findById(jsonBody.get("movieId"));
        Rating rating = new Rating(Double.parseDouble(jsonBody.get("ratingValue")));
        rating.setMovie(movie);

        User user = userRepository.findByUsername(principal.getName());
        rating.setUser(user);

        Optional<Rating> existingRating = ratingRepository.findByMovieIdAndUserId(rating.getMovie().getId(),
                rating.getUser().getId());
        if(existingRating.isPresent()) {
            existingRating.get().setValue(rating.getValue());
        } else {
            ratingRepository.save(rating);
        }
    }

    public Optional<List<Rating>> getUserRatings(Principal principal) {
        User currentUser = userRepository.findByUsername(principal.getName());
        return Optional.of(ratingRepository.getUserRatings(currentUser.getId()));
    }

//    public Optional<List<Rating>> getTopRatings() {
//        return Optional.of(ratingRepository.getTopRatings());
//    }
}
