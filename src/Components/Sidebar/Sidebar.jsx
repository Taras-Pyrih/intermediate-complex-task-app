import { Link } from 'react-router-dom';
import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <div className="Sidebar">
      <nav>
        <Link className='link' to='/todo-list'>TodoList</Link>
        <Link className='link' to='/registration-form'>RegistrationForm</Link>
      </nav>
    </div>
  );
}