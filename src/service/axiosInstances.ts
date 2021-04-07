import axios from 'axios';


// Prod
// =======================================================
export const axiosPB = axios.create({
  baseURL: 'https://vol-kor-pet-project.herokuapp.com/',
});


// Dev
// =======================================================
// export const axiosPB = axios.create({
//   baseURL: 'http://localhost:3000',
// });
