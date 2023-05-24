
import './Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PrivateLayout} from './Layouts/PrivateLayout';
import { Form1Page } from './Pages/Form1Page';
import { Form2Page } from './Pages/Form2Page';
import { Form3Page } from './Pages/Form3Page';
import { Form4Page } from './Pages/Form4Page';
import { Form5Page } from './Pages/Form5Page';
import { Inicio } from './Pages/Inicio';

function App()
{
  return (
    <div>
    <Router>
      <Routes>
          <Route path='/formulario1' element={<PrivateLayout />}>
            <Route index element={<Form1Page />} />
          </Route>
          <Route path='/formulario2' element={<PrivateLayout />}>
            <Route index element={<Form2Page />} />
          </Route>
          <Route path='/formulario3' element={<PrivateLayout />}>
            <Route index element={<Form3Page />} />
          </Route>
          <Route path='/formulario4' element={<PrivateLayout />}>
            <Route index element={<Form4Page />} />
          </Route>
          <Route path='/formulario5' element={<PrivateLayout />}>
            <Route index element={<Form5Page />} />
          </Route>
          <Route path='/' element={<PrivateLayout />}>
            <Route index element={<Inicio />} />
          </Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App
