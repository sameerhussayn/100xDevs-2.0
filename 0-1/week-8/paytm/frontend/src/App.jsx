import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Singin from './pages/Singin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import { PrivateRoutes } from './components/PrivateRoutes'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <div className='flex min-h-screen justify-center items-center bg-gray-600 '>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate replace to="/signin" />} />
        <Route path='/signup' element={<Signup />} />
        
        <Route path={'/signin'} element={<Singin />} />

        <Route element={<PrivateRoutes/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send/:id' element={<SendMoney />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
