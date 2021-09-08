package com.stephenalexander.projects.moviecollection.filter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class CustomAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;

    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    //Can alternately have user pass in body as JSON object and use object mapper to pull information that way
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(username,
                password);
        return authenticationManager.authenticate(authenticationToken);
    }

//    @Override
//    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response,
//                                            FilterChain chain, Authentication authentication)
//            throws IOException, ServletException {
//        User user = (User) authentication.getPrincipal();
//        //10, 60
//        String access_token = createToken(user, request, response, 5);
//        String refresh_token = createToken(user, request, response, 5);
//        Map<String, String> tokens = createTokenMap(access_token, refresh_token);
//        response.setContentType(APPLICATION_JSON_VALUE);
//        new ObjectMapper().writeValue(response.getOutputStream(), tokens);
//    }
//
//
//    private String createToken(User user, HttpServletRequest request, HttpServletResponse response, int minutes) {
//        //Poor practice acknowledged... only exposed for this demo application
//        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
//        return JWT.create()
//                .withSubject(user.getUsername())
//                .withExpiresAt(new Date(System.currentTimeMillis() + (minutes * 60 * 1000)))
//                .withIssuer(request.getRequestURL().toString())
//                .withClaim("roles",
//                        user.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
//                .sign(algorithm);
//    }
//
//    private Map<String, String> createTokenMap(String access_token, String refresh_token) {
//        Map<String, String> tokens = new HashMap<>();
//        tokens.put("access_token", access_token);
//        tokens.put("refresh_token", refresh_token);
//        return tokens;
//    }
}
