package com.stephenalexander.projects.moviecollection.rating;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.stephenalexander.projects.moviecollection.movie.Movie;
import com.stephenalexander.projects.moviecollection.rater.Rater;

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
    @Column(name = "rater_id")
    private Long raterId;
    @Column(name = "rating")
    private Double value;
    @Column(name = "created_at", insertable = false)
    private LocalDateTime time;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Movie movie;

//    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
//    @JoinColumn(name = "rater_id")
//    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
//    @JsonManagedReference
//    private Rater rater;

    public Rating(Double value) {
        this.value = value;
        this.time = LocalDateTime.now();
    }

    // For Jackson
    public Rating() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public LocalDateTime getTime() {
        return time;
    }

    public void setTime(LocalDateTime manualTime) {
        this.time = manualTime;
    }

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public Long getRaterId() {
        return raterId;
    }

    public void setRaterId(Long raterId) {
        this.raterId = raterId;
    }

    //    public Rater getRater() {
//        return rater;
//    }
//
//    public void setRater(Rater rater) {
//        this.rater = rater;
//    }

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
                ", ratingValue=" + value +
                ", time=" + time +
                '}';
    }
}
