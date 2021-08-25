package com.stephenalexander.projects.moviecollection.rater;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.stephenalexander.projects.moviecollection.rating.Rating;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity(name = "Rater")
@Table(name = "rater")
public class Rater {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "rater_id")
    private Long id;
    @Column(name = "created_at", insertable = false)
    private LocalDateTime time;

    @JsonBackReference
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, targetEntity = Rating.class)
    @JoinColumn(name = "rating")
    private List<Rating> ratings = new ArrayList<>();

    //For Jackson
    public Rater() {

    }

    public void addRating(Rating rating) {
        ratings.add(rating);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rater rater = (Rater) o;
        return id.equals(rater.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Rater{" +
                "raterID=" + id +
                '}';
    }
}
