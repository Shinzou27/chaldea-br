import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom'
import NavBar from './components/layout/NavBar.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App;
