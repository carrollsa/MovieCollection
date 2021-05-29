package com.stephenalexander.projects.movierecommender.ratings;

import javax.persistence.*;
import java.security.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;


@Entity
@Table(name="rating")
public class Rating {

    private Long ratingID;
    private Long raterID;
    private Long movieID;
    private Integer ratingValue;
    private LocalDateTime time;

    public Rating(Long movieID, Integer ratingValue) {
        this.movieID = movieID;
        this.ratingValue = ratingValue;
        this.time = LocalDateTime.now();
    }

    public Rating() {

    }

    @Column(name = "rater_id")
    public Long getRaterID() {
        return raterID;
    }

    public void setRaterID(Long raterID) {
        this.raterID = raterID;
    }

    @Column (name = "movie_id")
    public Long getMovieID() {
        return movieID;
    }

    public void setMovieID(Long movieID) {
        this.movieID = movieID;
    }

    @Column (name = "rating")
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
        return Objects.equals(raterID, rating.raterID) && movieID.equals(rating.movieID) && Objects.equals(ratingValue, rating.ratingValue);
    }

    @Override
    public int hashCode() {
        return Objects.hash(raterID, movieID, ratingValue);
    }

    @Override
    public String toString() {
        return "Rating{" +
                "ratingID=" + raterID +
                ", movieID=" + movieID +
                ", ratingValue=" + ratingValue +
                '}';
    }

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "rating_id")
    public Long getRatingID() {
        return ratingID;
    }

    public void setRatingID(Long ratingID) {
        this.ratingID = ratingID;
    }

    @Column(name = "time")
    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime manualTime) {
        this.time = manualTime;
    }
}
