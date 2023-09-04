import './App.css';
import UpcomingMovies from './UpcomingMovies';
import TrendingMovies from './TrendingMovies'
import SectionTitles from './SectionTitles';

function Overview() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Overview</h2>
      </div>
      <section className='container'>
        <SectionTitles h2="Upcoming movie premieres" paragraph="Keep track of the upcoming movie premieres" />
        <UpcomingMovies/>
      </section>
      <section className='container'>
        <SectionTitles h2="Trending movies" paragraph="Keep track of the trending movies on flairbox" />
        <TrendingMovies/>
      </section>
    </main>
  );
}

export default Overview;
