
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { SendMoney } from './pages/SendMoney'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'

function App() {
  return( <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/sendmoney' element = {<SendMoney/>}/>
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
