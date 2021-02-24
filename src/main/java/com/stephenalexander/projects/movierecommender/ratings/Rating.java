package com.stephenalexander.projects.movierecommender.ratings;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Rating {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long ratingID;
    private Long movieID;
    private Integer ratingValue;

    public Long getRatingID() {
        return ratingID;
    }

    public void setRatingID(Long ratingID) {
        this.ratingID = ratingID;
    }

    public Long getMovieID() {
        return movieID;
    }

    public void setMovieID(Long movieID) {
        this.movieID = movieID;
    }

    public Integer getRatingValue() {
        return ratingValue;
    }

    public void setRatingValue(Integer ratingValue) {
        this.ratingValue = ratingValue;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating = (Rating) o;
        return Objects.equals(ratingID, rating.ratingID) && movieID.equals(rating.movieID) && Objects.equals(ratingValue, rating.ratingValue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ratingID, movieID, ratingValue);
    }

    @Override
    public String toString() {
        return "Rating{" +
                "ratingID=" + ratingID +
                ", movieID=" + movieID +
                ", ratingValue=" + ratingValue +
                '}';
    }
}
