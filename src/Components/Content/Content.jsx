import { Routes, Route} from 'react-router-dom';
import { Message } from '../Message/Message.jsx';
import { TodoListFetch } from '../TodoListFetch/TodoListFetch.jsx';
import { TodoListAxios } from '../TodoListAxios/TodoListAxios.jsx';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm.jsx';
import { FormikForm } from '../FormikForm/FormikForm.jsx';
import './Content.scss';

export const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path='/' element={<Message/>}/>
        <Route path='/todo-list-fetch' element={<TodoListFetch/>}/>
        <Route path='/todo-list-axios' element={<TodoListAxios/>}/>
        <Route path='/registration-form' element={<RegistrationForm/>}/>
        <Route path='/formik' element={<FormikForm/>}/>
      </Routes>
    </div>
  );
}