package com.stephenalexander.projects.moviecollection.config;

import com.stephenalexander.projects.moviecollection.ParserFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.aws.jdbc.config.annotation.RdsInstanceConfigurer;
import org.springframework.cloud.aws.jdbc.datasource.TomcatJdbcDataSourceFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Properties;

@Configuration
public class AppConfig {

    @Value("${mail.server.username}")
    private String mailServerUsername;
    @Value("${mail.server.password}")
    private String mailServerPassword;

    @Bean
    public ParserFactory getParserFactoryBean() {
        return new ParserFactory();
    }

    @Bean
    public PasswordEncoder getPasswordEncoderBean() { return new BCryptPasswordEncoder(); }

    @Bean
    public JavaMailSender getJavaMailSenderBean() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);

        mailSender.setUsername(mailServerUsername);
        mailSender.setPassword(mailServerPassword);

        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.debug", "true");

        return mailSender;
    }

    @Bean
    public RdsInstanceConfigurer instanceConfigurer() {
        return ()-> {
            TomcatJdbcDataSourceFactory dataSourceFactory = new TomcatJdbcDataSourceFactory();
            dataSourceFactory.setInitialSize(10);
            dataSourceFactory.setValidationQuery("SELECT 1");
            return dataSourceFactory;
        };
    }
}