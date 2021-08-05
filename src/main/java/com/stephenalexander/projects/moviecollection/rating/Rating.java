package com.stephenalexander.projects.moviecollection.rating;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;


@Entity(name = "Rating")
@Table(name = "rating")
public class Rating {

    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    @Column(name = "rating_id")
    private Long id;
    @Column(name = "movie_id")
    private int movieId;
    @Column(name = "rating")
    private Double ratingValue;

    private LocalDateTime time;

    public Rating(Integer movieId, Double ratingValue) {
        this.movieId = movieId;
        this.ratingValue = ratingValue;
        this.time = LocalDateTime.now();
    }

    public Rating() {

    }

    @Column(name = "rating_id")
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column (name = "rating")
    public Double getRatingValue() {
        return ratingValue;
    }

    public void setRatingValue(Double ratingValue) {
        this.ratingValue = ratingValue;
    }

    @Column(name = "time")
    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime manualTime) {
        this.time = manualTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating = (Rating) o;
        return id.equals(rating.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", ratingValue=" + ratingValue +
                ", time=" + time +
                '}';
    }
}
