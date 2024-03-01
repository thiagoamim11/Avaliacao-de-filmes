import './Global.css'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import TelaDeLogin from './components/TelaDeLogin';
import TelaPrincipal from './components/TelaPrincipal';


function App() {
  
  return (
    <Router>
     <Routes>

        <Route path="/" element={<TelaDeLogin/>}/>
        <Route path="/TelaPrincipal" element={<TelaPrincipal/>}/>

     </Routes>
    </Router>
    
    
  )
}

export default App
