import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Rotas from './Pages/Rotas'
import Menu from './Pages/Menu'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import NotFound from './Pages/NotFound'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Aleatorio from './Pages/Aleatorio'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rotas" element={<Rotas />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/rotas/:id" element={ <Rotas/> } />
        <Route exact path="/aleatorio" element={ <Aleatorio/> } />
      </Routes>
    </Router>
  );
}

export default App;