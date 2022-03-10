import axios from 'axios';
import { baseURL } from "../../consts/consts";

export const todoListRequestOne = () => {
  axios.defaults.baseURL = baseURL;

  return new Promise((resolve, reject) => {
    axios.get('/posts', {
      onDownloadProgress: () => {
        console.log('Прогрес отримання відповіді <=');
      }
    })
    .then(response => {
      console.log('config: ', response.config);
      console.log('request: ', response.request);
      console.log('status: ', response.status);
      console.log('headers: ', response.headers);
      console.log('data: ', response.data);

      resolve(response.data);
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
      
      console.log('toJSON(): ', error.toJSON());

      reject(error);
    })
    .finally(() => console.log('Даний рядок коду виконається в будь-якому випадку'));
  });
};