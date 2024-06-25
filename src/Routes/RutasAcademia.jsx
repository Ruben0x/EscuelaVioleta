import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Horario from '../Pages/Horario';
import Precios from '../Pages/Precios';
import Profesores from '../Pages/Profesores';
import ProfesoresInfo from '../Pages/ProfesoresInfo';
import Contacto from '../Pages/Contacto';
import Acerca from '../Pages/Acerca';
import Clases from '../Pages/Clases';
import ClaseDetalle from '../Pages/ClaseDetalle';

export const RutasAcademia = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/horario' element={<Horario />}></Route>
      <Route path='/precios' element={<Precios />}></Route>
      <Route path='/profesores' element={<Profesores />}></Route>
      <Route path='/profesores/:id' element={<ProfesoresInfo />}></Route>
      <Route path='/contactanos' element={<Contacto />}></Route>
      <Route path='/acerca' element={<Acerca />}></Route>
      <Route path='/clases' element={<Clases />}></Route>
      <Route path='/clases/:id' element={<ClaseDetalle />}></Route>
    </Routes>
  );
};
