package com.stephenalexander.projects.moviecollection.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import static org.springframework.security.config.http.SessionCreationPolicy.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public SecurityConfig(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    //Add admin requirement for db modifications to secure server?
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        String[] permitted = new String[]{
                "/register",
                "/resources/templates/**",
                "/resources/static/**",
                "/css/**",
                "/js/**",
                "/img/**",
                "/api/v1/**",
                "/forgot-password/**",
                "/update-password/**",
                "/user/change-password/**",
                "/login/**"
        };

        http
                .csrf().disable()
                .authorizeRequests().antMatchers(permitted).permitAll()
                        .anyRequest().authenticated()
                .and()
                .formLogin()
                    .loginPage("/login")
//                    .failureUrl("/login?incorrectPassword")
                    .failureHandler(authenticationFailureHandler())
                    .permitAll()
                .and()
                .sessionManagement()
                    .sessionCreationPolicy(IF_REQUIRED)
                .and()
                .rememberMe().key("AbcdEfghIjklMNopQrsTuvXyz_0123456789")
                .and()
                .logout()
                    .logoutUrl("/logout_user")
                    .invalidateHttpSession(true)
                    .clearAuthentication(true)
                    .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                    .logoutSuccessUrl("/login?logout=auth.message.logoutSuccess")
                    .permitAll()
        ;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public AuthenticationFailureHandler authenticationFailureHandler() {
        return new CustomAuthenticationFailureHandler();
    }
}
