// import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
// import './App.css'

// import { Suspense, lazy } from 'react'
// const Landing = lazy(()=> import('./pages/Landing'))
// const Dashboard = lazy(()=> import('./pages/Dashboard'))

// function App() {
  

//   return (
//     <>
    
//     <BrowserRouter>
//     <div>
    
//       {/* <button>Landing</button> */}
//       <Link to='/'><button >Landing</button></Link>
//       <Link to='/dashboard'><button >dashboard</button></Link>
//     </div>
//       <Routes>
//           <Route path='/dashboard' element={<Suspense fallback={'Loading...'}><Dashboard/></Suspense>}/>
//           <Route path='/' element={<Suspense fallback='loading...'><Landing/></Suspense>}/>
//       </Routes>
//     </BrowserRouter>
//     </>
//   )
// }

// export default App
