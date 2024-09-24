# Movie API

This project is a RESTful API built using Node.js, Express, and MongoDB, with Mongoose for schema management. The API allows users to browse movies, manage user accounts, and add/remove movies to/from a list of favorites.

The app is deployed on Heroku with MongoDB hosted on Atlas. 

## Features

- **Movies**: Retrieve information about all movies or a specific movie by title, including genre and director information.
- **Users**: Register new users, update user information, and manage user favorites. Users can also deregister.
- **Favorites**: Users can add or remove movies from their list of favorites.
- **Authentication**: Authentication is enforced on some endpoints. All other endpoints are left open for the time being.

## Endpoints

| Method | URL                                 | Description                                      | Authentication Required |
|--------|-------------------------------------|--------------------------------------------------|-------------------------|
| `GET`  | `/movies`                           | Returns a list of all movies                     | No                      |
| `GET`  | `/movies/:Title`                    | Returns data about a single movie by title       | No                      |
| `GET`  | `/movies/genre/:genreName`          | Returns data about a genre by name/title         | No                      |
| `GET`  | `/directors/:directorName`          | Returns data about a director by name            | No                      |
| `GET`  | `/users`                            | Returns a list of all users                      | Yes                     |
| `GET`  | `/users/:Username`                  | Returns data about a single user by username     | Yes                     |
| `POST` | `/users`                            | Allows new users to register                     | No                      |
| `PUT`  | `/users/:Username`                  | Allows users to update their user info           | Yes                     |
| `POST` | `/users/:Username/movies/:MovieID`   | Adds a movie to a user's favorites               | Yes                     |
| `DELETE` | `/users/:Username/movies/:MovieID` | Removes a movie from a user's favorites          | Yes                     |
| `DELETE` | `/users/:Username/deregister`      | Deletes a user account                           | Yes                     |

## Deployment

This app is deployed on Heroku and uses MongoDB Atlas as the database.
