import EveryMovie from './components/AllMovies';
import MoviesNavbar from "./components/MoviesNavbar";

function Movies() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Movies</h2>
      </div>
      <section className='container'>
        <MoviesNavbar/>
        <EveryMovie/>
      </section>
    </main>
  );
}

export default Movies;
