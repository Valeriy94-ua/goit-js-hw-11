export const createGalleryCrd = hits => {
  const imagesArr = hits.map(hit => {
    return `<div class="photo-card">
      <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes${hit.likes}</b>
        </p>
        <p class="info-item">
          <b>Views${hit.views}</b>
        </p>
        <p class="info-item">
          <b>Comments${hit.comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads${hit.downloads}</b>
        </p>
      </div>
    </div>`;
  });
  return imagesArr.join('');
};

// <a href="${hit.largeImageURL}"<a/>
//
// export const createGalleryCrd = imagesInfo => {
//   if (!Array.isArray(imagesInfo)) {
//     return ''; // or handle the error case appropriately
//   }

//   const imagesArr = imagesInfo.map(imgInfo => {
//     return `<div class="photo-card">
//       <img src="${imgInfo.webFormatURL}" alt="${imgInfo.tags}" loading="lazy" />
//       <div class="info">
//         <p class="info-item">
//           <b>Likes${imgInfo.likes}</b>
//         </p>
//         <p class="info-item">
//           <b>Views${imgInfo.views}</b>
//         </p>
//         <p class="info-item">
//           <b>Comments${imgInfo.comments}</b>
//         </p>
//         <p class="info-item">
//           <b>Downloads${imgInfo.downloads}</b>
//         </p>
//       </div>
//     </div>`;
//   });

//   return imagesArr.join('');
// };
