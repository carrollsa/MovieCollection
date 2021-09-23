--how do I handle actors/directors since there is overlap in their duties?

UPDATE pg_database SET datistemplate = FALSE WHERE datname = 'template1';
DROP DATABASE template1;
CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8';
UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template1';
VACUUM FREEZE;

--Movie database current setup
CREATE DATABASE moviedatabase
    WITH OWNER steph
    TEMPLATE = template0
    lc_collate='en_US.UTF-8'
    lc_ctype='en_US.UTF-8';

CREATE TABLE movie (
	movie_id varchar(15) NOT NULL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	year INT,
    runningtime INT,
    UNIQUE(movie_id)
);

CREATE TABLE rater (
    rater_id SERIAL PRIMARY KEY,
    created_at TIMESTAMP
);

CREATE TABLE rating (
    rating_id SERIAL PRIMARY KEY,
    rater_id INT NOT NULL,
    movie_id VARCHAR(15) NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    FOREIGN KEY (rater_id) REFERENCES rater(rater_id),
    CONSTRAINT rater_movie_unique UNIQUE (rater_id, movie_id)
);

COPY movie(movie_id, title, year, runningtime) 
FROM 'C:\Users\Public\Documents\movie_file.csv' 
DELIMITER E'\t' 
CSV 
HEADER 
NULL AS '\N';


--Old moviedatabase without rater
CREATE DATABASE moviedatabase
    WITH OWNER steph
    TEMPLATE = template0
    lc_collate='en_US.UTF-8'
    lc_ctype='en_US.UTF-8';

CREATE TABLE movie (
	movie_id varchar(15) NOT NULL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	year INT,
    runningtime INT,
    UNIQUE(movie_id)
);

CREATE TABLE rating (
    rating_id SERIAL PRIMARY KEY,
    movie_id VARCHAR(15) NOT NULL,
    rating INT NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
);

-- SECURITY TABLES
CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    name varchar(255) 
);

CREATE TABLE appuser (
    user_id SERIAL PRIMARY KEY,
    name varchar(255),
    password varchar(255),
    username varchar(255),
    FOREIGN KEY(role_id) REFERENCES roles(role_id)
);

CREATE TABLE appuser_roles (
    user_id int not null,
    role_id int not null,
    PRIMARY KEY (user_id, role_id),
    FOREIGN KEY(user_id) references appuser(user_id),
    FOREIGN KEY(role_id) references roles(role_id)
);

INSERT INTO appuser(user_id, first_name, last_name, password, username) VALUES (1, 'Steve', 'Carroll', '$2a$10$rgYXYv6kJt6JXyjLY21OReCVIJ.kefP/1MUv9wEhAtKURdrPDdxvi', 'stephenalexandercarroll@gmail.com');
INSERT INTO role(role_id, name) VALUES (1, 'ROLE_USER');
INSERT INTO role(role_id, name) VALUES (2, 'ROLE_MANAGER');
INSERT INTO role(role_id, name) VALUES (3, 'ROLE_ADMIN');
INSERT INTO user_roles(user_id, role_id) VALUES (1, 1);
INSERT INTO user_roles(user_id, role_id) VALUES (1, 2);
INSERT INTO user_roles(user_id, role_id) VALUES (1, 3);
INSERT INTO appuser(user_id, first_name, last_name, password, username) VALUES (2, 'Sarah', 'Coit', '$2a$10$rgYXYv6kJt6JXyjLY21OReCVIJ.kefP/1MUv9wEhAtKURdrPDdxvi', 'srosecoit@gmail.com');
INSERT INTO user_roles(user_id, role_id) VALUES (2, 1);
INSERT INTO user_roles(user_id, role_id) VALUES (2, 2);
INSERT INTO appuser(user_id, first_name, last_name, password, username) VALUES (3, 'Darcy', 'Deady', '$2a$10$rgYXYv6kJt6JXyjLY21OReCVIJ.kefP/1MUv9wEhAtKURdrPDdxvi', 'darcy@gmail.com');
INSERT INTO user_roles(user_id, role_id) VALUES (3, 1);


INSERT INTO role(name) VALUES ('ROLE_USER');
INSERT INTO role(name) VALUES ('ROLE_MANAGER');
INSERT INTO role(name) VALUES ('ROLE_ADMIN');
-- spring session
CREATE TABLE SPRING_SESSION (
  PRIMARY_ID CHAR(36) NOT NULL,
  SESSION_ID CHAR(36) NOT NULL,
  CREATION_TIME BIGINT NOT NULL,
  LAST_ACCESS_TIME BIGINT NOT NULL,
  MAX_INACTIVE_INTERVAL INT NOT NULL,
  EXPIRY_TIME BIGINT NOT NULL,
  PRINCIPAL_NAME VARCHAR(100),
  CONSTRAINT SPRING_SESSION_PK PRIMARY KEY (PRIMARY_ID)
);
 
CREATE UNIQUE INDEX SPRING_SESSION_IX1 ON SPRING_SESSION (SESSION_ID);
CREATE INDEX SPRING_SESSION_IX2 ON SPRING_SESSION (EXPIRY_TIME);
CREATE INDEX SPRING_SESSION_IX3 ON SPRING_SESSION (PRINCIPAL_NAME);
 
CREATE TABLE SPRING_SESSION_ATTRIBUTES (
  SESSION_PRIMARY_ID CHAR(36) NOT NULL,
  ATTRIBUTE_NAME VARCHAR(200) NOT NULL,
  ATTRIBUTE_BYTES BYTEA NOT NULL,
  CONSTRAINT SPRING_SESSION_ATTRIBUTES_PK PRIMARY KEY (SESSION_PRIMARY_ID, ATTRIBUTE_NAME),
  CONSTRAINT SPRING_SESSION_ATTRIBUTES_FK FOREIGN KEY (SESSION_PRIMARY_ID) REFERENCES SPRING_SESSION(PRIMARY_ID) ON DELETE CASCADE
);
 
CREATE INDEX SPRING_SESSION_ATTRIBUTES_IX1 ON SPRING_SESSION_ATTRIBUTES (SESSION_PRIMARY_ID);

-- CREATE TABLE ratings (
--     rater_id INT NOT NULL,
--     rating_id INT NOT NULL,

--     rating INT (2),
--     CONSTRAINT rating_pk PRIMARY KEY (rater_id, movie_id),
--     FOREIGN KEY (rater_id) REFERENCES rater(rater_id) ON UPDATE CASCADE(?),
--     FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
--     UNIQUE(rating_id)
-- );

-- CREATE TABLE genres (
--     genre_id INT NOT NULL,
--     genre VARCHAR(100)
-- )

-- CREATE TABLE movie_genres {
--     movie_id INT NOT NULL,
--     genre_id INT NOT NULL,
--     CONSTRAINT movie_genre_pk PRIMARY KEY (movie_id, genre_id),
--     CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id), 
--     CONSTRAINT FK_genre FOREIGN KEY (genre_id) REFERENCES genre(movie_id)
-- }

-- CREATE TABLE directors {
--     person_id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(50)
--     FOREIGN KEY ()
-- }

-- CREATE TABLE movie_directors {
--     movie_id INT NOT NULL,
--     person_id INT NOT NULL,
--     CONSTRAINT movie_director_pk PRIMARY KEY (movie_id, person_id),
--     CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id), 
--     CONSTRAINT FK_director FOREIGN KEY (person_id) REFERENCES people(person_id)
-- }

-- CREATE TABLE people {
--     id INT NOT NULL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL,
--     birthdate DATE,
--     deathdate DATE
-- }