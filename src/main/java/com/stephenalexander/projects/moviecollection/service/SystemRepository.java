package com.stephenalexander.projects.moviecollection.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class SystemRepository {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public SystemRepository(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    //TODO: Is this proper configuration for PostgreSQL? Was "SELECT CURRENT_DATE FROM DUAL" which, I believe, is an
    // Oracle thing
    public String getCurrentDate() {
        String result = jdbcTemplate.queryForObject("Select CURRENT_DATE", new RowMapper<String>() {
            @Override
            public String mapRow(ResultSet rs, int rowNum) throws SQLException {
                return rs.getString(1);
            }
        });
        return result;
    }
}
