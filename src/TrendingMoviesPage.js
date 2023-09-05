import TrendingMovies from "./components/TrendingMovies";
import MoviesNavbar from "./components/MoviesNavbar";

function TrendingMoviesPage() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Movies</h2>
      </div>
      <section className='container'>
        <MoviesNavbar/>
        <TrendingMovies/>
      </section>
    </main>
  );
}

export default TrendingMoviesPage;
