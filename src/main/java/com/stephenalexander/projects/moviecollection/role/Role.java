package com.stephenalexander.projects.moviecollection.role;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.stephenalexander.projects.moviecollection.user.User;

import javax.persistence.*;
import java.util.Collection;

@Entity
@Table(name = "role")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "role_id")
    private Long id;
    private String name;

    @ManyToMany(targetEntity = User.class, mappedBy = "roles")
    @JsonIgnore
    private Collection<User> users;

    public Role(String name) {
        this.name = name;
    }

    public Role () {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Collection<User> getUsers() {
        return users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}
