import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/Signup'
import Singin from './pages/Singin'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'

function App() {
  return (
    <div className='flex min-h-screen justify-center items-center bg-gray-600 '>
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Singin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/send/:id' element={<SendMoney />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
