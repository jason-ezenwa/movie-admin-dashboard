import MovieProperties from "./components/MoviePropeties";
import InterestTrackingInsights from "./components/InterestTrackingInsights";
import SimilarMovies from "./components/SimilarMovies";
import MoviesNavbar from "./components/MoviesNavbar";
import Audience from "./components/Audience"; 
import { hottestThisWeek } from "./data";
function MovieOfTheWeek() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Movie of the Week</h2>
      </div>
      <section className='container'>
        <MoviesNavbar/>
        <h3 className='movie-title'>{hottestThisWeek.name}</h3>
      </section>
      <section className="container movie-picture-and-info-grapics">
        <section>
          <img style={{'width': '200px', 'height': '100%', 'borderRadius': '8px', 'position': 'relative', 'bottom': 0 }} src="./images/spiderman.jpg" alt="movie poster"/>
        </section>
        <section className="audience" style={{'paddingBottom': '20px'}}>
          <Audience />
        </section>
      </section>
      <section className='container'>
        <MovieProperties/>
      </section>
      <section className='container'>
        <InterestTrackingInsights/>
      </section>
      <section className='container'>
        <SimilarMovies/>
      </section>
    </main>
  );
}

export default MovieOfTheWeek;