# CMatches - A Case Study

## Problem Statement

Cricket is one of international sport and it is widely popular in India.
 
This case study is about showing current and old cricket matches played around the world. Also the details about each match including score and other statistics has to be displayed.

Build a system to find current cricket matches and add matches to favourite list.

## Requirements

- The application needs to fetch cricket matches from the following API.
  
  1. https://www.cricapi.com/

Refer the following URLs to explore more on the cricket match APIs.
  1. https://www.cricapi.com/how-to-use.aspx
  2. https://www.cricapi.com/how-to-use/next-matches-api.aspx
  3. https://www.cricapi.com/how-to-use/match-api.aspx
  4. https://www.cricapi.com/how-to-use/scores-api.aspx

- A frontend where the user can register/login to the application, find current or old cricket matches and add interested matches to favourite list.
- The upcoming cricket schedule can be displayed on the home page as a calendar as a quick view to the user. This can be viewed after successful login into the application.
- The complete match statistics can be displayed for a selected cricket match.
- User can add a match to favourite list and should be able to view favourite matches.

## Modules

- UserService - should be able to manage user accounts.
- UI (User interface) -  should be able to
-   View cricket calendar
-   View current matches
-   Add a match to favourite list
-   should be able to see favourite matches
-   UI should be responsive which can run smoothly on various devices 
- FavouriteService - should be able to store all the favourite matches for a user

## Tech Stack

- Spring Boot
- Angular
- CI (Gitlab Runner)
- Docker, Docker Compose

## Flow of Modules

All the durations are only approximations

- Building frontend : 
  1. Building responsive views:
    - Register/Login
    - Cricket Matches - populating from external API
    - Build a view to show favourite matches
  2. Using Services to populate these data in views
  3. Stitching these views using Routes and Guards
  4. Making the UI Responsive
  5. E2E test cases and unit test cases
  6. Writing CI configuration file
  7. Dockerize the frontend

- Building the UserService
  1. Creating a server in Spring Boot to facilitate user registration and login using JWT token and MySQL
  2. Writing swagger documentation
  3. Unit Testing
  4. Write CI Configuration
  5. Dockerize the application
  6. Write docker-compose file to build both frontend and backend application

- Building the Favourite Service
  1. Building a server in Spring Boot to facilitate CRUD operation over favourite matches stored in MySQL
  2. Writing Swagger Documentation
  3. Write Unit Test Cases
  4. Write CI Configuration
  5. Dockerize the application
  6. Update the docker-compose

- Demonstrate the entire application