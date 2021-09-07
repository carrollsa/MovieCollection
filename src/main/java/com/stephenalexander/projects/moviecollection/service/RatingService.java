package com.stephenalexander.projects.moviecollection.service;

import com.stephenalexander.projects.moviecollection.entity.Movie;
import com.stephenalexander.projects.moviecollection.entity.Rating;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.entity.Rater;
import com.stephenalexander.projects.moviecollection.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@Transactional
public class RatingService {

    private final RatingRepository ratingRepository;
    private final MovieRepository movieRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository, MovieRepository movieRepository) {
        this.ratingRepository = ratingRepository;
        this.movieRepository = movieRepository;
    }

    public void addNewRating(Rating rating) {
        ratingRepository.save(rating);
    }

    public void addOrUpdate(Map<String, String> jsonBody) {
        Movie movie = movieRepository.findById(jsonBody.get("movieId"));
        Rating rating = new Rating(Double.parseDouble(jsonBody.get("ratingValue")));
        rating.setMovie(movie);

        Rater rater = new Rater();
        rater.setId(1L);
        rating.setRater(rater);

        //WHERE RATERID = blah
        Optional<Rating> existingRating = ratingRepository.findByMovieIdAndRaterId(rating.getMovie().getId(),
                rating.getRater().getId());
        if(existingRating.isPresent()) {
            existingRating.get().setValue(rating.getValue());
        } else {
            ratingRepository.save(rating);
        }
    }

    public Optional<List<Rating>> getTopRatings() {
        return Optional.of(ratingRepository.getTopRatings());
    }
}