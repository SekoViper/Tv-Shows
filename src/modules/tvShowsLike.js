import { getTVShows } from './createTVShow.js';
import { displayTVShows } from './displayTVShows.js';
import { getLikes } from './getLikes.js';

const tvShowsContainer = document.getElementById('shows-container');

const APIUrl = process.env.LIKESAPIPATH;

export const createLikes = async (itemId) => {
  await fetch(APIUrl, {
    method: 'POST',
    body: JSON.stringify({ item_id: itemId }),
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  });
};

export const likeCount = async () => {
  const likeBtns = document.querySelectorAll('.fa-regular');
  likeBtns.forEach((likeBtn, index) => {
    likeBtn.addEventListener('click', async () => {
      if (likeBtn.classList.contains('fa-regular')) {
        const dataTvShow = await getTVShows();
        const itemId = dataTvShow.find((x) => x.id === index + 1);

        await createLikes(itemId.id);

        const tvShows = await getTVShows();
        const like = await getLikes();
        tvShowsContainer.innerHTML = '';

        await displayTVShows(tvShows, like);
        await likeCount();
      } else {
        likeBtn.className = 'fa-regular fa-heart';
      }
    });
  });
};

export default { createLikes, likeCount };