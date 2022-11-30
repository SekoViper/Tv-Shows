const tvShowsContainer = document.getElementById('shows-container');

export const displayTVShows = (tvShows, like) => tvShows.slice(0, 12).forEach((tvShow, index) => {
  const content = `
      <div class="main-container">
        <div class="tv-img">
        <img src="${tvShow.image.medium}" alt="${tvShow.name} image">
      </div>
      <div class="tvshows-content">
        <p>${tvShow.name}</p>
        <p>Likes: ${like[index] ? like[index].likes : 0}</p>
      </div>

      <div class="popup-section container-md">
          <button class="view-more" type="button" data-bs-toggle="modal" data-bs-target="#myModal-${tvShow.id}"> Comment </button>
            <div class="modal" id="myModal-${tvShow.id}">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                  </div>
                  <div class="popup-first-section modal-header">
                    
                    <img class="popup-image" src="${tvShow.image.original}" alt="${tvShow.name} image">
                    <h2> ${tvShow.name} </h2>
                  </div>

                  <div class="popup-second-section modal-header">
                    <span class="span-feature">
                      Country: ${tvShow.network.country.name}
                    </span>
                    <span class="span-feature">
                      Average Runtime: ${tvShow.averageRuntime}
                    </span>
                    <span class="span-feature">
                      Genre: ${tvShow.genres}
                    </span>
                    <span class="span-feature">
                      Status: ${tvShow.status}
                    </span>
                  </div>
                  <div class="popup-third-section modal-header">
                    <h2> Summary </h2>
                    ${tvShow.summary}
                  </div>
                  <div class="popup-forth-section modal-header">
                  <h2> Comments </h2>
                  <p>...</p>
                </div>
                </div>
              <div>
            </div>
          </div>
        </div>
      </div>
    </div>

  `;
  tvShowsContainer.insertAdjacentHTML('beforeend', content);
});

export default { displayTVShows };