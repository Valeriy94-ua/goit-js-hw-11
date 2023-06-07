// -------------var with AXIOS----------------
import axios from 'axios';

export class UnsplashAPI {
  static URL = 'https://pixabay.com/';

  constructor() {
    this.page = 1;
    this.query = null;
    this.per_page = 40;
  }

  getImgByFetch() {
    const API_KEY = '37071708-0661979eab5b763353ae6a629';
    const searchParams = {
      key: API_KEY,
      q: this.query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.per_page,
    };
    return axios.get(`${UnsplashAPI.URL}api/?`, {
      params: searchParams,
    });
  }
}

// -------------1st var------------------------------
// export class UnsplashAPI {
//   static URL = 'https://pixabay.com/';

//   constructor() {
//     this.page = null;
//     this.query = null;
//   }

//   getImgByFetch() {
//     const API_KEY = '37071708-0661979eab5b763353ae6a629';
//     const searchParams = new URLSearchParams({
//       key: API_KEY,
//       q: `${this.query}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: `${this.page}`,
//       per_page: 5,
//     });
//     return fetch(`${UnsplashAPI.URL}api/?${searchParams}`).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     });
//   }
// }
// -------------var with method ASYNC-----------------
// const getImages = async () => {
//   const URL = 'https://pixabay.com/';
//   const API_KEY = '37071708-0661979eab5b763353ae6a629';
//   const query = null;
//   const page = null;

//   const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     page: page,
//     per_page: 20,
//   });

//   try {
//     const response = await fetch(`${URL}api/?${searchParams}`);
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Failed to fetch images');
//   }
// };
