import './Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TelaPrincipal from './components/TelaPrincipal'
import { Sidebar } from './components/Sidebar'


function App() {

  return (
    <div>
      <Sidebar/>
      <Router>
        <Routes>         
          <Route path="/" element={<TelaPrincipal/>} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
