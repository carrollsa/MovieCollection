package com.stephenalexander.projects.movierecommender.rater;

import com.stephenalexander.projects.movierecommender.rating.Rating;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity(name = "Rater")
@Table(name = "rater")
public class Rater {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    @Column(name = "rater_id")
    private Long id;


    //TODO: Find out whether this needs to be initialized somewhere. If it's a new rater, can ratings be added
    // without an extra step?
    @OneToMany(fetch = FetchType.LAZY, targetEntity = Rating.class, mappedBy = "rater")
    private List<Rating> ratings;

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
