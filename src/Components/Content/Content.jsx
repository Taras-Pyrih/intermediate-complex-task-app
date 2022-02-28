import { Routes, Route} from 'react-router-dom';
import { Message } from '../Message/Message.jsx';
import { TodoList } from '../TodoList/TodoList.jsx';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm.jsx';
import { FormikForm } from '../FormikForm/FormikForm.jsx';
import './Content.scss';

export const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path='/' element={<Message/>}/>
        <Route path='/todo-list' element={<TodoList/>}/>
        <Route path='/registration-form' element={<RegistrationForm/>}/>
        <Route path='/formik' element={<FormikForm/>}/>
      </Routes>
    </div>
  );
}