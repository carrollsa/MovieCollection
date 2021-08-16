package com.stephenalexander.projects.moviecollection.rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RatingService {

    private final RatingRepository ratingRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    public void addNewRating(Rating rating) {
        ratingRepository.save(rating);
    }

    public Optional<List<Rating>> getTopRatings() {
        return Optional.of(ratingRepository.getTopRatings());
    }
}
