CREATE TABLE movie (
	movie_id INT NOT NULL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	year SMALLINT NOT NULL,
    runningtime SMALLINT NOT NULL,
    posterurl VARCHAR(350)
);

ALTER TABLE rating 
  ADD CONSTRAINT rating_movie_id_fkey 
  FOREIGN KEY (movie_id)
  REFERENCES movie(movie_id) 
  ON UPDATE CASCADE;

-- CREATE TABLE test (
-- 	movie_id INT NOT NULL PRIMARY KEY,
-- 	title VARCHAR(100) NOT NULL,
-- 	year INT NOT NULL,
-- 	country VARCHAR(200),
--     genre VARCHAR(100),
--     director VARCHAR(350),
-- 	runningtime SMALLINT NOT NULL,
--     posterurl VARCHAR(255)
-- );

CREATE TABLE rater (
    rater_id INT NOT NULL PRIMARY KEY
);

CREATE TABLE rating (
    rating_id SERIAL PRIMARY KEY,
    rater_id INT NOT NULL,
    movie_id INT NOT NULL,
    rating SMALLINT,
    FOREIGN KEY (rater_id) REFERENCES rater(rater_id) ON UPDATE CASCADE,
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id) ON UPDATE CASCADE
);

CREATE TABLE people (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birthdate DATE,
    deathdate DATE
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    role VARCHAR(20)
);

CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    genre VARCHAR(100)
);

CREATE TABLE movies_genres (
    movie_id INT NOT NULL,
    genre_id INT NOT NULL,
    CONSTRAINT movie_genre_pk PRIMARY KEY (movie_id, genre_id),
    CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id), 
    CONSTRAINT FK_genre FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);

CREATE TABLE directors (
    director_id SERIAL PRIMARY KEY,
    name VARCHAR(350)
);

CREATE TABLE movies_directors (
    movie_id INT NOT NULL,
    director_id INT NOT NULL,
    CONSTRAINT movie_director_pk PRIMARY KEY (movie_id, director_id),
    CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id), 
    CONSTRAINT FK_director FOREIGN KEY (director_id) REFERENCES directors(director_id)
);

CREATE TABLE countries (
    country_id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE movies_countries (
    movie_id INT NOT NULL,
    country_id INT NOT NULL,
    CONSTRAINT movie_country_pk PRIMARY KEY (movie_id, country_id),
    CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    CONSTRAINT FK_country FOREIGN KEY (country_id) REFERENCES countries(country_id)
);

\COPY genres FROM 'D:/Steph/repos/MovieRecommender/src/data/genres.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);
\COPY directors FROM 'D:/Steph/repos/MovieRecommender/src/data/directors.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);
\COPY countries FROM 'D:/Steph/repos/MovieRecommender/src/data/countries.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);
\COPY movies_directors FROM 'D:/Steph/repos/MovieRecommender/src/data/moviedirectorjoin.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);
\COPY movies_genres FROM 'D:/Steph/repos/MovieRecommender/src/data/moviegenrejoin.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);
\COPY movies_countries FROM 'D:/Steph/repos/MovieRecommender/src/data/moviecountryjoin.csv' (DELIMITER ',', FORMAT CSV, ENCODING'UTF8', HEADER);


-- INSERT INTO genres (genre)
-- values ('Action');
-- INSERT INTO genres (genre)
-- values ('Thriller');
-- INSERT INTO genres (genre)
-- values ('Biography');
-- INSERT INTO genres (genre)
-- values ('Drama');
-- INSERT INTO genres (genre)
-- values ('Comedy');
-- INSERT INTO genres (genre)
-- values ('Romance');
-- INSERT INTO genres (genre)
-- values ('Adventure');
-- INSERT INTO genres (genre)
-- values ('Animation');
-- INSERT INTO genres (genre)
-- values ('Horror');
-- INSERT INTO genres (genre)
-- values ('Crime');
-- INSERT INTO genres (genre)
-- values ('Sci-Fi');
-- INSERT INTO genres (genre)
-- values ('Sport');
-- INSERT INTO genres (genre)
-- values ('Music');
-- INSERT INTO genres (genre)
-- values ('Musical');
-- INSERT INTO genres (genre)
-- values ('Documentary');
-- INSERT INTO genres (genre)
-- values ('History');
-- INSERT INTO genres (genre)
-- values ('Film-Noir');
-- INSERT INTO genres (genre)
-- values ('Fantasy');
-- INSERT INTO genres (genre)
-- values ('Family');
-- INSERT INTO genres (genre)
-- values ('Mystery');
-- INSERT INTO genres (genre)
-- values ('Short');
-- INSERT INTO genres (genre)
-- values ('Western');
-- INSERT INTO genres (genre)
-- values ('War');
-- INSERT INTO genres (genre)
-- values ('Superhero');