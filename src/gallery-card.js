export const createGalleryCrd = hits => {
  const imagesArr = hits.map(hit => {
    return `
    <div class="photo-card">
      <div class="img-cont">
        <a href="${hit.largeImageURL}" class="img-link">
          <img class="img-image" src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
        </a>
      </div>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          ${hit.likes}
        </p>
        <p class="info-item">
          <b>Views</b>
          ${hit.views}
        </p>
        <p class="info-item">
          <b>Comments</b>
          ${hit.comments}
        </p>
        <p class="info-item">
          <b>Downloads</b>
          ${hit.downloads}
        </p>
      </div>
    </div>`;
  });
  return imagesArr.join('');
};

// <a href="${hit.webformatURL}" class="img-link">
//   <img src="${hit.largeImageURL}" alt="${hit.tags}" loading="lazy" />
// </a>;
