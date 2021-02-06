import axios from 'axios';

export const axiosPB = axios.create({
  baseURL: 'https://goit-phonebook-api.herokuapp.com',
});
