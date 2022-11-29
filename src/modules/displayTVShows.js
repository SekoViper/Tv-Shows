const tvShowsContainer = document.getElementById('shows-container');

export const displayTVShows = (tvShows) => tvShows.slice(0, 12).forEach((tvShow) => {
  const content = `
      <div class="container">
        <div class="tv-img">
        <img src="${tvShow.image.medium}" alt="${tvShow.name} image">
      </div>
      <div class="tvshows-content">
        <p>${tvShow.name}</p>
        <p>Rating: ${tvShow.rating.average}</p>
      </div>
      <button id="comment">Comment</button>
      </div>
  `;
  tvShowsContainer.insertAdjacentHTML('beforeend', content);
});

export default { displayTVShows };