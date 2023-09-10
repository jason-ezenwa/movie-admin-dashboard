import UserLogins from "./components/UserLogins";
import AverageWatchtime from "./components/AverageWatchtime";

function Users() {
  return (
    <main>
      <section className='container'>
        <h3>Users Infographics</h3>
        <div className='user-charts-div'>
        <section>
          <UserLogins/>
        </section>
        <section>
          <AverageWatchtime/>
        </section>
        </div>
      </section>
    </main>
  );
}

export default Users;
