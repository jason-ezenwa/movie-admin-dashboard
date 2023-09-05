import UpcomingMovies from "./components/UpcomingMovies";
import MoviesNavbar from "./components/MoviesNavbar";

function UpcomingMoviesPage() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Movies</h2>
      </div>
      <section className='container'>
        <MoviesNavbar/>
        <UpcomingMovies/>
      </section>
    </main>
  );
}

export default UpcomingMoviesPage;
