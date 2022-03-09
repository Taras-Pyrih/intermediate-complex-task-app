import { useState, useEffect } from "react";
import { ListItem } from '../ListItem/ListItem.jsx';
import { v4 as uuidv4 } from 'uuid';
import './TodoListFetch.scss';

export const TodoListFetch = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(array => setPosts(array));
  }, []);

  const handleChangeDone = index => {
    const newPosts = [...posts];

    newPosts[index].done = !newPosts[index].done;
    setPosts(newPosts);
  }

  const postList = posts.map((item, index) => {
    if (!item.done) {
      item.done = false;
    }

    return <ListItem obj={item} postIndex={index} onChangeDone={handleChangeDone} key={uuidv4()}/>;
  });

  return (
    <div className="TodoListFetch">
      <h1>Список постів:</h1>
      {
        postList.length != 0 &&
        <ul>
          {postList}
        </ul>
      }
    </div>
  );
}