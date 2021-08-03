package com.stephenalexander.projects.movierecommender.rater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
import java.util.Set;

@Service
public class RaterService {

    private final RaterRepository raterRepository;

    @Autowired
    public RaterService(RaterRepository raterRepository) {
        this.raterRepository = raterRepository;
    }

    public Iterable<Rater> getAllRaters() {
        return raterRepository.findAll();
    }

    public ResponseEntity<Collection<Rater>> getTopRaters() {
        return ResponseEntity.of(Optional.of(raterRepository.getTopRaters()));
    }

    public void addNewRater(Rater rater) {
        raterRepository.save(rater);
    }

    public Optional<Rater> findById(Long id) {
        return raterRepository.findById(id);
    }
}
