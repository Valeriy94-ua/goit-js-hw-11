export class UnsplashAPI {
  static URL = 'https://pixabay.com/';

  constructor() {
    this.page = null;
    this.query = null;
  }

  getImgByFetch() {
    const API_KEY = '37071708-0661979eab5b763353ae6a629';
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: `${this.query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: `${this.page}`,
      per_page: 5,
    });
    return fetch(`${UnsplashAPI.URL}api/?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
