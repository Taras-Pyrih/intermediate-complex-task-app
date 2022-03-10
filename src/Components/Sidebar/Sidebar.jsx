import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/todo-list-fetch'>TodoListFetch</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/todo-list-axios'>TodoListAxios</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/registration-form'>RegistrationForm</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/formik'>FormikForm</NavLink>
      </nav>
    </div>
  );
};