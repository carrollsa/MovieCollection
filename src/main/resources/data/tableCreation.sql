--how do I handle actors/directors since there is overlap in their duties?

CREATE TABLE movies (
	movie_id INT NOT NULL PRIMARY KEY,
	title VARCHAR(250) NOT NULL,
	year INT,
    runningtime INT,
    UNIQUE(movie_id)
);

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