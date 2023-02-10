import arrow from './images/icon-arrow.svg'
import background from './images/pattern-bg.png'

//https://geo.ipify.org/api/v2/country,city?apiKey=at_KOqNTBOdMgCrU13BOCeSqw3CZDi4O&ipAddress=8.8.8.8

function App() {
  return (
    <>
      <section>
        <div className="absolute -z-10">
          <img src={background} alt="" className="w-full h-80 object-cover" />
        </div>
        <article className="mb-8">
          <h1 className="text-2xl text-center lg:text-3xl text-white font-bold mb-8">
            IP Address Tracker
          </h1>

          <form className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              name="ipAddress"
              id="ipAddress"
              placeholder="Search for any IP address or Domain"
              className="py-2 px-4 rounded-l-lg w-full"
              required
            />
            <button
              type="submit"
              className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg"
            >
              <img src={arrow} alt="" />
            </button>
          </form>
        </article>

        <article className='bg-white rounded-lg shadow p-8 mx-8'>
          <div className='lg:border-r lg:border-slate-400'>
            <h2 className='uppercase text-sm font-bold text-slate-500 tracking-wider mb-3'>IP ADDRESS</h2>
            <p className='font-bold text-slate-900'>192.212.174.101</p>
          </div>
          <div>
            <h2>LOCATION</h2>
            <p>Brooklyn, NY 10001</p>
          </div>
          <div>
            <h2>TIMEZONE</h2>
            <p>UTC-05:00</p>
          </div>
          <div>
            <h2>ISP</h2>
            <p>SpaceX</p>
            <p>Starlink</p>
          </div>
        </article>

      </section>
    </>
  );
}

export default App;
