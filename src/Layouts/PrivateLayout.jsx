import {Sidebar} from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

export function PrivateLayout()
{
    <div className="container">
      <Sidebar />
      <main className="content">
        <Outlet/>
      </main>
    </div>
}