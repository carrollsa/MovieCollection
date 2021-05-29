CREATE TABLE movies (
	movie_id INT NOT NULL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	year INT NOT NULL,
    type VARCHAR(10), --either movie or tvmovie
	-- genre VARCHAR(20), NOT NULL, --
	-- director VARCHAR(100) NOT NULL, --
	country VARCHAR(50),
	posterurl VARCHAR(150),
    runningtime INT NOT NULL,
    UNIQUE(id)
);

CREATE TABLE raters (
    rater_id INT NOT NULL PRIMARY KEY,
)

CREATE TABLE ratings (
    rater_id INT NOT NULL,
    rating_id INT NOT NULL,
    movie_id INT NOT NULL,
    rating INT (2),
    CONSTRAINT rating_pk PRIMARY KEY (rater_id, movie_id),
    FOREIGN KEY (rater_id) REFERENCES rater(rater_id) ON UPDATE CASCADE(?),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id),
    UNIQUE(rating_id)
);

CREATE TABLE genres (
    genre_id INT NOT NULL,
    genre VARCHAR(100)
)

CREATE TABLE movie_genres {
    movie_id INT NOT NULL,
    genre_id INT NOT NULL,
    CONSTRAINT movie_genre_pk PRIMARY KEY (movie_id, genre_id),
    CONSTRAINT FK_movie FOREIGN KEY (movie_id) REFERENCES movie(movie_id), 
    CONSTRAINT FK_genre FOREIGN KEY (genre_id) REFERENCES genre(movie_id)
}

CREATE TABLE directors {
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50)
    FOREIGN KEY ()
}

CREATE TABLE

CREATE TABLE people {
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birthdate DATE,
    deathdate DATE
}

CREATE TABLE roles {
    id INT NOT NULL PRIMARY KEY,
    role VARCHAR(20)
}