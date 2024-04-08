import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Horario from './Pages/Horario';
import Precios from './Pages/Precios';
import Profesores from './Pages/Profesores';
import ProfesoresInfo from './Pages/ProfesoresInfo';
import './index.css';
import Navbar from './Components/Navbar';
import Contacto from './Pages/Contacto';
import Acerca from './Pages/Acerca';
import Footer from './Components/Footer';
import Clases from './Pages/Clases';
import ClaseDetalle from './Pages/ClaseDetalle';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/horario' element={<Horario />}></Route>
      <Route path='/precios' element={<Precios />}></Route>
      <Route path='/profesores' element={<Profesores />}></Route>
      <Route path='/profesoresInfo' element={<ProfesoresInfo />}></Route>
      <Route path='/contactanos' element={<Contacto />}></Route>
      <Route path='/acerca' element={<Acerca />}></Route>
      <Route path='/clases' element={<Clases />}></Route>
      <Route path='/clases/1' element={<ClaseDetalle />}></Route>
    </Routes>
  );
}

export default App;
