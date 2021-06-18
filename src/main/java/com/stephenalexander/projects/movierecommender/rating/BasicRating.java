package com.stephenalexander.projects.movierecommender.rating;

public class BasicRating implements Comparable<BasicRating> {
    private Integer id;
    private Double value;

    public BasicRating(Integer id, Double value) {
        this.id = id;
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    @Override
    public int compareTo(BasicRating o) {
        if(this.value > o.getValue()) {
            return 1;
        } else if (o.getValue() > this.getValue()) {
            return -1;
        } else {
            return 0;
        }
    }
}
