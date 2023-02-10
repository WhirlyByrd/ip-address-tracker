import arrow from './images/icon-arrow.svg'

//https://geo.ipify.org/api/v2/country,city?apiKey=at_KOqNTBOdMgCrU13BOCeSqw3CZDi4O&ipAddress=8.8.8.8

function App() {
  return (
    <>
      <section>
        <article>
          <h1>IP Address Tracker</h1>
          <form>
            <input type="text" name="ipAddress" id="ipAddress" placeholder="Search for any IP address or Domain" required/>
            <button type="submit">
              <img src={arrow} alt=''/>
            </button>
          </form>
        </article>
    </section>
    </>
  );
}

export default App;
