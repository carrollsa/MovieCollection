package com.stephenalexander.projects.moviecollection.controller;

import com.stephenalexander.projects.moviecollection.entity.Rating;
import com.stephenalexander.projects.moviecollection.repository.MovieRepository;
import com.stephenalexander.projects.moviecollection.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.*;

@RequestMapping("api/v1")
@RestController
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) {
        this.ratingService = ratingService;
    }

    /**
     *
     * @param jsonBody - JSON body consisting of two key-value pairs with keys: movieId and ratingValue
     */
    @PostMapping("/rating")
    public void addOrUpdateRating(@RequestBody Map<String, String> jsonBody, Principal principal) {
        ratingService.addOrUpdate(jsonBody, principal);
    }

    @GetMapping("/rating")
    public ResponseEntity<Optional<List<Rating>>> displayCollection(Principal principal) {
        return ResponseEntity.of(Optional.of(ratingService.getUserRatings(principal)));
    }
}
