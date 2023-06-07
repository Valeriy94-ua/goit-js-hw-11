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
  loadMoreBtn: document.querySelector('.load-more'),
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

      if (data.totalHits === 0) {
        return;
      }
      if (data.totalHits !== 1) {
        refs.loadMoreBtn.classList.remove('is-hidden');
      }
      refs.gallery.innerHTML = createGalleryCrd(data.hits);
    })
    .catch(err => {
      console.log(err);
    });
};

const onLoadMoreBtn = e => {
  unsplashAPI.page += 1;

  unsplashAPI
    .getImgByFetch()
    .then(data => {
      refs.gallery.insertAdjacentHTML('beforeend', createGalleryCrd(data.hits));
      console.log(createGalleryCrd(data.hits));

      if (unsplashAPI.page === data.totalHits) {
        refs.loadMoreBtn.classList.add('is-hidden');
        //   Notiflix.Notify.failure('We're sorry, but you've reached the end of search results.')
      }
    })
    .catch(err => {
      console.log(err);
    });
};

refs.form.addEventListener('submit', inputSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);
