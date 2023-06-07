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
//////////////////////////////////////////
// ------------VAR WITH ASYNC--------------
//////////////////////////////////////////
const unsplashAPI = new UnsplashAPI();
console.log(unsplashAPI.per_page);

const inputSearch = async e => {
  e.preventDefault();
  unsplashAPI.page = 1;
  unsplashAPI.query = e.target.elements.searchQuery.value.trim().toLowerCase();

  try {
    const { data } = await unsplashAPI.getImgByFetch();
    console.log(data);
    console.log(data.hits);

    if (data.totalHits === 0) {
      refs.gallery.innerHTML = '';
      refs.loadMoreBtn.classList.add('is-hidden');
      serchFailure();
      return;
    }

    if (data.totalHits <= 41) {
      refs.gallery.innerHTML = createGalleryCrd(data.hits);
      return;
      // refs.loadMoreBtn.classList.add('is-hidden');
    }

    refs.gallery.innerHTML = createGalleryCrd(data.hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    console.log(err);
  }
};

const onLoadMoreBtn = async e => {
  unsplashAPI.page += 1;

  try {
    const { data } = await unsplashAPI.getImgByFetch();

    refs.gallery.insertAdjacentHTML('beforeend', createGalleryCrd(data.hits));

    if (unsplashAPI.page === Math.ceil(data.totalHits / 40)) {
      refs.loadMoreBtn.classList.add('is-hidden');
      searchResFinish();
    }
  } catch (err) {
    console.log(err);
  }
};

refs.form.addEventListener('submit', inputSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

function serchFailure() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function searchResFinish() {
  Notiflix.Notify.info(
    'We are sorry, but you have reached the end of search results.'
  );
}
// console.log(data);
// console.log(createGalleryCrd(data.hits));

// ------------VAR WITH FETCH--------------
// const unsplashAPI = new UnsplashAPI();
// console.log(unsplashAPI);

// const inputSearch = e => {
//   e.preventDefault();
//   unsplashAPI.page = 1;
//   unsplashAPI.query = e.target.elements.searchQuery.value.trim();

//   unsplashAPI
//     .getImgByFetch()
//     .then(data => {
//       // console.log(data);
//       // console.log(createGalleryCrd(data.hits));

//       if (data.totalHits === 0) {
//         return;
//       }
//       if (data.totalHits !== 1) {
//         refs.loadMoreBtn.classList.remove('is-hidden');
//       }
//       refs.gallery.innerHTML = createGalleryCrd(data.hits);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// const onLoadMoreBtn = e => {
//   unsplashAPI.page += 1;

//   unsplashAPI
//     .getImgByFetch()
//     .then(data => {
//       refs.gallery.insertAdjacentHTML('beforeend', createGalleryCrd(data.hits));
//       if (unsplashAPI.page === data.totalHits) {
//         refs.loadMoreBtn.classList.add('is-hidden');
//         Notiflix.Notify.failure(
//           'We are sorry, but you have reached the end of search results.'
//         );
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// refs.form.addEventListener('submit', inputSearch);
// refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);
