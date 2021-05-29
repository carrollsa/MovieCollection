package com.stephenalexander.projects.movierecommender.raters;

import javax.persistence.*;
import java.util.Objects;

//TODO: Have index store a new rater

@Entity
@Table(name = "rater")
public class Rater {
    @Id
    @GeneratedValue(
            strategy = GenerationType.AUTO
    )
    private Long raterID;

    public Long getRaterID() {
        return raterID;
    }

    public void setRaterID(Long raterID) {
        this.raterID = raterID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rater rater = (Rater) o;
        return raterID.equals(rater.raterID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(raterID);
    }

    @Override
    public String toString() {
        return "Rater{" +
                "raterID=" + raterID +
                '}';
    }
}
