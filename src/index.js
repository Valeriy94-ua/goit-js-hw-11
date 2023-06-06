import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { UnsplashAPI } from './fetch-images.js';
import { createGalleryCrd } from './gallery-card.js';

const refs = {
  btn: document.querySelector('button'),
  input: document.querySelector('input'),
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('#search-form'),
};

const unsplashAPI = new UnsplashAPI();
console.log(unsplashAPI);

const inputSearch = e => {
  e.preventDefault();
  unsplashAPI.page = 1;
  unsplashAPI.query = e.target.elements.searchQuery.value.trim();

  unsplashAPI
    .getImgByFetch()
    .then(data => {
      console.log(data);
      console.log(createGalleryCrd(data.hits));

      refs.gallery.innerHTML = createGalleryCrd(data.hits);
    })

    .catch(err => {
      console.log(err);
    });
};

refs.form.addEventListener('submit', inputSearch);
