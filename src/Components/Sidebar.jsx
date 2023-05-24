import { Link } from 'react-router-dom';


export function Sidebar()
{
  return (
    <div className="sidebar">
      <div className="logo">
         Code - Factory</div>
      <ul className="menu">
        <li>
          <Link to="/formulario1">
            <a>Gestionar unidad académica</a>
          </Link>
        </li>
        <li>
          <Link to="/formulario2">
            <a>Buscar unidad académica por nombre y 
              código</a>
          </Link>
        </li>
        <li>
          <Link to="/formulario3">
            <a>Agregar unidad académica</a>
          </Link>
        </li>
        <li>
          <Link to="/formulario4">
            <a>Actualizar información unidad     
              academica</a>
          </Link>
        </li>
        <li>
          <Link to="/formulario5">
            <a>Eliminar unidad académica</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}


