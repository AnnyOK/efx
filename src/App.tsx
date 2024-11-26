import {BrowserRouter as Router, Routes,Route}  from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './views/Home'
import AddRate from './views/AddRate'
import AddVolume from './views/AddVolume'
import Logout from './views/Logout'
import Report from './views/Report'
function App() {

  return (
    <div className='w-[1480px]'>
<Router>
      <Routes>
        <Route index element={<Login/>}/>
<Route path='dashboard' element={<Dashboard/>}>
<Route index element={<Home/>}/>
<Route path='addrate' element={<AddRate/>}/>
<Route path='addvolume' element={<AddVolume/>}/>
<Route path='report' element={<Report/>}/>
<Route path='logout' element={<Logout/>}/>
</Route>
      </Routes>
      
    </Router>
    </div>
    
  )
}

export default App
