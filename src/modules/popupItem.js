import { getApi } from './getApi.js';

const popupItem = async (e) => {
  const obj = await getApi(e.target.id);

  const textHtml = `
    <div class="popup-item">
    <div class="popup-comment">
        <h3 class="tv-name">${obj.name}</h3>
        <div class="grid">
            <div class="pop-up-img">
                <img src='${obj.image.medium}' alt='${obj.name}'>
            </div>
            <p class="prem">Premiered time: ${obj.premiered}</p>
            <p class="source-url">See full TV Show <a class="link" href="${obj.url}" target="_blank"
                    rel="noopener">here</a></p>
            <p class="genres">Genres: ${obj.genres}</p>
            <p class='rating'>Rating:${obj.rating.average}</p>
            
        </div>
    </div>
    <span class="close-container">
      <i class="fa fa-close"></i>
    </span>
</div>
    `;

  document.body.insertAdjacentHTML('afterbegin', textHtml);

  const closeIcon = document.querySelector('.close-container');
  const popUpContainer = document.querySelector('.popup-item');

  closeIcon.addEventListener('click', () => {
    popUpContainer.style.display = 'none';
  });
};

const displayPopUp = (btns) => {
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      popupItem(e);
    });
  });
};

export default displayPopUp;