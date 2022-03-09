import { useState, useEffect } from "react";
import { ListItem } from '../ListItem/ListItem.jsx';
import { v4 as uuidv4 } from 'uuid';
import './TodoListAxios.scss';

export const TodoListAxios = () => {
  const [posts, setPosts] = useState([]);

  const axios = require('axios');

  axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    axios.get('/posts', {
      onDownloadProgress: () => {
        console.log('Прогрес отримання відповіді <=');
      }
    })
    .then(response => {
      setPosts(response.data);

      console.log('config: ', response.config);
      console.log('request: ', response.request);
      console.log('status: ', response.status);
      console.log('headers: ', response.headers);
      console.log('data: ', response.data);
    })
    .catch(error => {
      if (error.response) {
        console.log('config: ', error.config);
        console.log('request: ', error.request);
        console.log('status: ', error.response.status);
        console.log('headers: ', error.response.headers);
        console.log('data: ', error.response.data);

      } else if (error.request) {
        console.log('config: ', error.config);
        console.log('request: ', error.request);
      } else {
        console.log('config: ', error.config);
      }
      
      console.log('toJSON(): ', error.toJSON())
    });
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
}