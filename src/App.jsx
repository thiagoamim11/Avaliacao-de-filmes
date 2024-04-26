import './Global.css';
import { TelaPrincipal } from './components/TelaPrincipal';
import { TelaCadastro } from './components/TelaCadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TelaFilmes } from './components/TelaFilmes';
import { TelaSeries } from './components/TelaSeries';
import {TelaTerror} from './components/TelaTerror';
import {TelaComedia} from './components/TelaComedia';
import { TelaAcao } from './components/TelaAcao';
import { TelaSuspense } from './components/TelaSuspense';

function App() {
  return (    
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<TelaPrincipal />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/filmes"  element={<TelaFilmes />}/>
          <Route path="/series"  element={<TelaSeries />}/>
          <Route path="/terror"  element={<TelaTerror/>}/>
          <Route path="/comédia" element={<TelaComedia/>}/>
          <Route path="/ação" element={<TelaAcao/>}/>
          <Route path="/suspense" element={<TelaSuspense/>}/>


          


          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
