import UpcomingMovies from './components/UpcomingMovies';
import TrendingMovies from './components/TrendingMovies';
import UserLogins from './components/UserLogins';

function Overview() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Overview</h2>
      </div>
      <section className='container'>
        <UserLogins/>
      </section>
      <section className='container'>
        <UpcomingMovies/>
      </section>
      <section className='container'>
        <TrendingMovies/>
      </section>
    </main>
  );
}

export default Overview;
