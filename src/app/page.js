import Navbar from "./components/Navbar";
import Map from "./components/Map";

const style ={
  wrapper : `h-screen w-screen flex flex-col`,
}
export default function Home() {
  return (
   <div className={style.wrapper}>
   <Navbar/>
 <div className={style.main}>
  <Map/>
 </div>
 <div className={style.rideRequestContainer}>
 <div className={style.rideRequest}>
  {/*locayion selector */}
  {/**confirm ride */}
  </div>
   </div>
   </div>
  )
}
