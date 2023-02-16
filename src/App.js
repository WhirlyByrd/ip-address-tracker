import { useState, useEffect } from 'react'
import arrow from './images/icon-arrow.svg'
import background from './images/pattern-bg.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import icon from './icon'


//api requires a paid subscription to use ipify. 
function App() {
  const [address, setAddress] = useState(null);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=192.212.174.101`)
        const data = await res.json();
        setAddress(data)
      }

      getInitialData();

    } catch (error) {
      console.trace(error)
    }
  }, [])


  return (
    <>
      <section>
        <div className="absolute -z-10">
          <img src={background} alt="" className="w-full h-80 object-cover" />
        </div>
        <article className="mb-8 py-9">
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

        {address && (
        <>
        <article 
        className="bg-white rounded-lg shadow p-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left lg:-mb-16 relative" style={{zIndex: 10000}}>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              IP ADDRESS
            </h2>
            <p className="font-medium text-slate-900 text-lg md:text-xl xl:text-2xl">
              {address.ip}
            </p>
          </div>

          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              LOCATION
            </h2>
            <p className="font-medium text-slate-900 text-lg md:text-xl xl:text-2xl">
              Brooklyn, NY 10001
            </p>
          </div>

          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              TIMEZONE
            </h2>
            <p className="font-medium text-slate-900 text-lg md:text-xl xl:text-2xl">
              UTC-05:00
            </p>
          </div>

          <div>
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
              ISP
            </h2>
            <p className="font-medium text-slate-900 text-lg md:text-xl xl:text-2xl">
              SpaceX Starlink
            </p>
          </div>
        </article>

        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          style={{height: '700px', width: '100vw'}}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={icon} position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        </>
         )}
      </section>
    </>
  );
}

export default App;
