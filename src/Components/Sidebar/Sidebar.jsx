import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/todo-list'>TodoList</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/registration-form'>RegistrationForm</NavLink>
      </nav>
    </div>
  );
}