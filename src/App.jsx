import './Global.css';
import { TelaPrincipal } from './components/TelaPrincipal';
import { TelaCadastro } from './components/TelaCadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaFilmes } from './components/TelaFilmes';
import { TelaSeries } from './components/TelaSeries';
import {TelaTerror} from './components/TelaTerror';

function App() {
  return (    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TelaPrincipal />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/filmes"  element={<TelaFilmes />}/>
          <Route path="/series"  element={<TelaSeries />}/>
          <Route path="terror"  element={<TelaTerror/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
