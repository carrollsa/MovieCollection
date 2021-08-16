--how do I handle actors/directors since there is overlap in their duties?

UPDATE pg_database SET datistemplate = FALSE WHERE datname = 'template1';
DROP DATABASE template1;
CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8';
UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template1';
VACUUM FREEZE;

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

COPY movie(movie_id, title, year, runningtime) 
FROM 'C:\Users\Public\Documents\movie_file.csv' 
DELIMITER E'\t' 
CSV 
HEADER 
NULL AS '\N';

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