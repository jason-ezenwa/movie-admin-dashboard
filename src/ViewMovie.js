import MovieProperties from "./components/MovieProperties";
import InterestTrackingInsights from "./components/InterestTrackingInsights";
import SimilarMovies from "./components/SimilarMovies";
import MoviesNavbar from "./components/MoviesNavbar";
import Audience from "./components/Audience"; 
import { allMovies } from "./data";
import { useParams } from "react-router-dom";
function ViewMovie() {
  const params = useParams()
  const { movieName } = params;
  const nameOfMovie = movieName.replace(/_/g, ' ');
  console.log(params)
  const foundMovie = allMovies.find(movieObj => {
    return movieObj.name === nameOfMovie;
  });
  return (
    <main>
      <section className='container'>
        <MoviesNavbar/>
        <h3 className='movie-title'>{foundMovie.name}</h3>
      </section>
      <section className="container movie-picture-and-info-grapics">
        <section>
          <img style={{'width': '200px', 'height': '100%', 'borderRadius': '8px', 'position': 'relative', 'bottom': 0 }} src={`/images/${foundMovie.image}`} alt="movie poster"/>
        </section>
        <section className="audience" style={{'paddingBottom': '20px'}}>
          <Audience />
        </section>
      </section>
      <section className='container'>
        <MovieProperties movie={foundMovie}/>
      </section>
      <section className='container'>
        <InterestTrackingInsights/> {/* uses movie of the week's data */}
      </section>
      <section className='container'>
        <SimilarMovies/>
      </section>
    </main>
  );
}

export default ViewMovie;