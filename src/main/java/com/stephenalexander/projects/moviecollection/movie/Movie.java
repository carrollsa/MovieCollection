package com.stephenalexander.projects.moviecollection.movie;

import com.stephenalexander.projects.moviecollection.rater.Rater;
import com.stephenalexander.projects.moviecollection.rating.Rating;


import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity(name = "Movie")
@Table(name = "movie")
public class Movie implements Serializable {
    @Id
    @Column(name = "movie_id")
    private String id;
    private String title;
    private Integer year;
    @Column(name = "runningtime")
    private Integer runningTime;

    @OneToMany(mappedBy="movie", cascade=CascadeType.ALL)
    private List<Rating> ratings;

    public Movie(String id, String title, Integer year, Integer runningTime) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.runningTime = runningTime;
    }

    //for Jackson
    public Movie() {

    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getRunningTime() {
        return runningTime;
    }

    public void setRunningTime(Integer runningTime) {
        this.runningTime = runningTime;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", year=" + year +
                ", runningTime=" + runningTime +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Movie movie = (Movie) o;
        return id.equals(movie.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
