import { Movie } from './movie';
import { useEffect, useState } from 'react';

// const movieData = Movie.MovieData;

function MovieList(props: any) {
  const [listOfMovies, setListOfMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOfMovies(temp);
    };
    fetchMovie();
  }, []);

  // const addMovie = () => {
  //   setListOfMovies([
  //     ...movieData,
  //     {
  //       Category: 'Action',
  //       Title: 'Puss in Boots',
  //       Year: 2023,
  //       Director: 'Tim Burton',
  //       Rating: 'PG-13',
  //     },
  //   ]);
  // };
  return (
    <>
      <div>
        <h3>{props.title}</h3>
      </div>
      <div className="text-bg-secondary p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.movieId}>
                <td>{m.title}</td>
                <td>{m.year}</td>
                <td>{m.director}</td>
                <td>{m.rating}</td>
                <td>{m.category}</td>
                <td>{m.edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
