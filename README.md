# Movie Database
---

## Overview
This is a demo Spring application exploring full-stack development. It includes a ReactJS frontend and Java backend with a PostgreSQL database hosted on an AWS EC2 instance with RDS. The app includes authentication with login, registration, and password recovery services styled with Bootstrap 5.

The app itself utilizes Spring Security and Spring Session to manage the user’s authentication and allows the user to look up, rate, and store their favorite movies in a collection. The homepage has a search box which queries an internal database for basic movie information. The search box handles partial title searches and responsively pares down results as the user types, allowing for directional keypresses to select from the list. Once a title is selected, the user can rate it to add it to their collection.

The “My Collection” page offers a broad view of the user’s collection of movies with the option to select individual movies for greater detail, querying an outside API tied to IMDB.

---
## Table of Contents
* [Technologies](https://github.com/carrollsa/MovieCollection/blob/main/README.md#technologies)
* [Challenges](https://github.com/carrollsa/MovieCollection/blob/main/README.md#challenges)
* [Installation](https://github.com/carrollsa/MovieCollection/blob/main/README.md#installation)
* [Features and How to Use](https://github.com/carrollsa/MovieCollection/blob/main/README.md#features)
* [Known Issues](https://github.com/carrollsa/MovieCollection/blob/main/README.md#issues)
* [Upcoming Improvements](https://github.com/carrollsa/MovieCollection/blob/main/README.md#improvements)
* [Credits](https://github.com/carrollsa/MovieCollection/blob/main/README.md#credits)
---
<a name="technologies"/>

## Technologies

Spring 
* The Spring framework seemed the right choice for this type of demo app. Spring allowed me to quickly handle basic configuration and manage dependency injection to focus on exploring the basic functionality of the app I was building with controller-service-repository architecture. As I added layers, Spring had helpful annotations to perform its “magic” and wire everything up. 

Thymeleaf and Bootstrap

* The Thymeleaf/Bootstrap combination was one I’d wanted to explore for a while and was a common pairing with Spring Authentication. 

ReactJS
* I began building my frontend with strict JavaScript in order to learn the base of a few other JS frameworks, but it quickly became clear that, for my purposes, the payoff for actually writing my app in JavaScript and HTML would not match the effort. I pivoted to learning the fundamentals of JS within a closed context and using ReactJS in the development of my app. I found it to be far more intuitive and allow for much easier design of a responsive UI, and I chose it over other frameworks because of its growing popularity.

Java
* Java was the first language I became proficient in, and I fell in love with the strong typing and explicit nature of the language. It felt as if I could interpret most anything once I learned its syntax, and it felt like the natural choice to be the base of the backend of this project.

PostgreSQL
* I did not utilize any of the special functionality of PostgreSQL, but as the basic syntax of PostgreSQL and MySQL is roughly the same and speed was not an issue for this app, I would begin familiarizing myself with the more customizable of the two.

---
<a name="challenges"/>

## Challenges

Annotations
* By far, the most struggle came from Spring annotations. They were the problem and solution to most everything. The magic performed by Spring often seemed to have error handling that equated to “the magic didn’t work,” and the simplest configurations regularly required hours of reading of documentation and StackOverflow questions. In comparison to what it may have taken without annotations, I’m sure the time I spent with finicky annotations was negligible, but it could be pretty tedious. 

Scaling
* This project began as an attempt to make a standalone implementation of an early Java project that used a hefty algorithm to recommend movies to a user. I knew the algorithm was inefficient, but I had no idea just how costly it could be, considering I only had a few thousand entries in each of my datasets. After months of work, the app finally ran, and I learned the hard way that exponentially scaling database querying was not going to work. I had to shut the server off after about 10 minutes of it trying to produce a single user’s recommendations. I completely overhauled the idea to be far less intense on the calculation side and focus more on exploring simple transactions and UI development. 

New Technologies
* This is fairly general, but having never worked in a production environment, I was flying blind in the way of choosing new technologies to work with. There were many instances of spending hours or even days trying to understand and/or implement a new technology before finding that it wasn’t applicable to my use case. It all got easier as my general knowledge of different fields of programming grew, and I could foresee upcoming pitfalls, but it was a challenge to approach virtually every aspect of this project without any base knowledge.

---
<a name="installation"/>

## Installation

1. Before running, you must have an instance of PostgreSQL running on port 5432.

1. Configure your connection details in an application.properties file. See application.properties.example.

1. Run `./gradlew :bootRun`

---
<a name="features"/>

## Features and How to Use

* ### Register New Account

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/RegisterNewAccount.gif" width="640" height="360" />


* ### Reset Password

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/ResetPassword.gif" width="640" height="360" />


* ### Log In

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/LogIn.gif" width="640" height="360" />


* ### Add Movies to Your Collection

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/AddMovies.gif" width="640" height="360" />


* ### Change Theme

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/ToggleTheme.gif" width="640" height="360" />


* ### View Movie Details 

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/ViewDetails.gif" width="640" height="360" />


* ### Log Out

<img src="https://github.com/carrollsa/carrollsa_public/blob/main/LogOut.gif" width="640" height="360" />

---
<a name="issues"/>

## Known Issues

* Many endpoints need to be secured
* Needs security against brute force login attempts
* Up and down keypress within search box before search query has been made results in an error.
* Changing star rating within detailed view does not update within collection view until refresh

---
<a name="improvements"/>

## Upcoming Improvements

* Streamlining of service and controller layers
* Changing explicit redirects to come from response json

---
<a name="credits"/>

## Credits

* Duke University instructors on Coursera - Owen Astrachan, Robert Duvall, Andrew D. Hilton & Susan H. Rodger
    * Taught me the basics of Java
* UC San Diego instructors on Coursera - Christine Alvarado, Mia Minnes & Leo Porter
    * Taught me more advanced Java programming concepts
* [Tyler McGinnis](https://github.com/tylermcginnis) from UI.dev
    * Taught me ReactJS and JavaScript
* [Timothy Carroll](https://github.com/tjcarroll11)
    * Guided me at various stages of this project
* Nelson Djalo and Amigoscode
    * [Spring Boot Tutorial](https://www.youtube.com/watch?v=8SGI_XS5OPw)
    * [Spring Security Tutorial](https://www.youtube.com/watch?v=her_7pa0vrg)
    * [PostgreSQL Tutorial](https://www.youtube.com/watch?v=5hzZtqCNQKk)

