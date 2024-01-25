
import ParaGen from './assets/components/paragraphGen/ParaGen'
import Profile from './assets/components/Profile'
import BackgroundChanger from './assets/components/bg/BackgroundChanger'
import NumInput from './assets/components/otpPage/NumInput'
import OtpHome from './assets/components/otpPage/OtpHome'
const user = {
  userName : "Rita Correia",
  age: 32,
  location: "London",
  avatar_url: "https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw",
  stats: [
    {  label: "Followers", value: "80k" },
    {  label: "Likes", value: "430k" },
    {  label: "Photos", value: "1k" },
  ],
}

function App() {


  return (
    <>
    {/* <BackgroundChanger /> */}
     {/* <Profile user={user}/> */}
     <ParaGen />
      {/* <OtpHome /> */}
    </>
  )
}

export default App
