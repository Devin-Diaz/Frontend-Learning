/*
    Display the following array of movie objects based off the following criteria:

    All movies in 2018 with rating > 4
    Sort them by their rating in descending order
    Only display their title
*/

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]

// Im a JS sweat now fr.
movies
    .filter(movie => movie.year === 2018 && movie.rating > 4)
    .map(movie => movie.title)
    .reverse()
    .forEach(title => console.log(title));

