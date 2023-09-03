import './App.css';
import UpcomingMovies from './UpcomingMovies';

function Overview() {
  return (
    <main>
      <div className='page-title-div'>
        <h2 className='page-title' >Overview</h2>
      </div>
      <section className='container'>
        <UpcomingMovies/>
      </section>
    </main>
  );
}

export default Overview;
