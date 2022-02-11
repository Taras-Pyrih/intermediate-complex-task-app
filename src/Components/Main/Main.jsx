import { Sidebar } from '../Sidebar/Sidebar.jsx';
import { Content } from '../Content/Content.jsx';
import './Main.scss';

export const Main = () => {
  return (
    <div className="Main">
      <Sidebar/>
      <Content/>
    </div>
  );
}