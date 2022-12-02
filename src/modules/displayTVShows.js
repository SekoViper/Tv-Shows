const tvShowsContainer = document.getElementById('shows-container');

tvShowsContainer.innerHTML = '';
export const displayTVShows = (tvShows, like) => tvShows.slice(0, 15).forEach((tvShow, index) => {
  const content = `
      <div class="main-container">
        <div class="tv-img">
        <img src="${tvShow.image.medium}" alt="${tvShow.name} image">
      </div>
      <div class="tvshows-content">
        <p class="movie__name">${tvShow.name}</p>
        <p class="movie__likes"><i class="fa-regular fa-heart" id="${tvShow.id}" style="cursor:pointer;"></i><span class="like-number">${like.find((x) => x.item_id === index + 1) ? like.find((x) => x.item_id === index + 1).likes : 0} </span></p>
      </div>

      <div class="popup-section container-md">
      <button class="view-more" type="button" data-bs-toggle="modal" id="${tvShow.id}" data-bs-target="#myModal-${tvShow.id}"> Comment </button>

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
                  <div class="comments-title">
                      <h2> Comments </h2>
                      <span class="comment-count-${tvShow.id}"></span>
                    </div>
                    <div class="get-comments-tag-${tvShow.id}">
                    </div>
                  </div>
                  <div class="popup-fiveth-section modal-header">
                    <h2> Create a Comment </h2>
                    <form class="comment-form" id="${tvShow.id}" method="post">
                      <input id="input-name-${tvShow.id}" class="form-input" type="text" placeholder="Your Name" value="" required>
                      <textarea name="user_message" id="input-comments-${tvShow.id}" class="form-text-area" placeholder="Your Comments" value="" maxlength="600" required></textarea>
                      <div class="form-submit-buttons">
                        <button type="submit" class="form-submit-button">Submit</button>
                      <div>
                    </form>
                
                </div>
              <div>
            </div>
  `;
  tvShowsContainer.insertAdjacentHTML('beforeend', content);
});

export default { displayTVShows };