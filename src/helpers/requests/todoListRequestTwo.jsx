import axios from 'axios';
import { baseURL } from "../../consts/consts";

export const todoListRequestTwo = async () => {
  axios.defaults.baseURL = baseURL;

  try {
    const response = await axios.get('/posts', {
      onDownloadProgress: () => {
        console.log('Прогрес отримання відповіді <=');
      }
    });

    console.log('config: ', response.config);
    console.log('request: ', response.request);
    console.log('status: ', response.status);
    console.log('headers: ', response.headers);
    console.log('data: ', response.data);

    return Promise.resolve(response.data);
  } catch (error) {
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
    
    return Promise.reject(error);
  } finally {
    console.log('Даний рядок коду виконається в будь-якому випадку');
  }
};