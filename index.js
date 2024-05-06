const express = require('express'),
  morgan = require('morgan');
const app = express();

let popularMovies = [
  { title: 'Avatar', year: 2009 },
  { title: 'Titanic', year: 1997 },
  { title: 'Star Wars: Episode VII - The Force Awakens', year: 2015 },
  { title: 'Jurassic World', year: 2015 },
  { title: 'The Avengers', year: 2012 },
  { title: 'Avengers: Age of Ultron', year: 2015 },
  { title: 'Black Panther', year: 2018 },
  { title: 'Harry Potter and the Deathly Hallows - Part 2', year: 2011 },
  { title: 'Frozen II', year: 2019 },
  { title: 'Incredibles 2', year: 2018 },
];

//GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my movie API');
});

app.get('/movies', (req, res) => {
  res.json(popularMovies);
});

//serve static files from the 'public' folder
app.use(express.static('public'));

//listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});

//use morgan middleware library to log all requests
app.use(morgan('common'));

//error-handling middleware function to log application-level errors to the terminal
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
