package com.stephenalexander.projects.moviecollection.rating;

import com.stephenalexander.projects.moviecollection.movie.Movie;
import com.stephenalexander.projects.moviecollection.movie.MovieRepository;
import com.stephenalexander.projects.moviecollection.rater.Rater;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
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
        rating.setRater(rater);

        Optional<Rating> existingRating = ratingRepository.findByMovieId(rating.getMovie().getId());
        if(existingRating.isPresent()) {
            existingRating.get().setRatingValue(rating.getRatingValue());
        } else {
            ratingRepository.save(rating);
        }
    }

    public Optional<List<Rating>> getTopRatings() {
        return Optional.of(ratingRepository.getTopRatings());
    }
}
