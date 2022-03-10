import { useState, useEffect } from "react";
import { todoListRequestTwo } from '../../helpers/requests/todoListRequestTwo.jsx';
import { ListItem } from '../ListItem/ListItem.jsx';
import { v4 as uuidv4 } from 'uuid';
import './TodoListAxios.scss';

export const TodoListAxios = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    todoListRequestTwo().then(posts => setPosts(posts));
  }, []);

  const handleChangeDone = index => {
    const newPosts = [...posts];

    newPosts[index].done = !newPosts[index].done;
    setPosts(newPosts);
  };

  const postList = posts.map((item, index) => {
    if (!item.done) {
      item.done = false;
    }

    return <ListItem obj={item} postIndex={index} onChangeDone={handleChangeDone} key={uuidv4()}/>;
  });

  return (
    <div className="TodoListAxios">
      <h1>Список постів:</h1>
      {
        postList.length != 0 &&
        <ul>
          {postList}
        </ul>
      }
    </div>
  );
};