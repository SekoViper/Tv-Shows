export const renderComments = async (BASECOMMENTSAPI) => {
  const fetchData = await fetch(BASECOMMENTSAPI, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error);
  return fetchData;
};

export const populateComments = (comments, itemId) => {
  const getCommentsTag = document.querySelector(`.get-comments-tag-${itemId}`);
  getCommentsTag.innerHTML = '';
  const listItems = document.createElement('ul');
  listItems.className = 'comment-items';

  comments.forEach((comment) => {
    listItems.innerHTML += `
        <li class="each-comment">
          <span class="item-holder"> <span class="comment-username">${comment.creation_date} ${comment.username}:</span>   ${comment.comment}</span>
        </li>
      `;
  });
  getCommentsTag.appendChild(listItems);

  const commentTag = document.querySelector(`.comment-count-${itemId}`);
  commentTag.innerHTML = `(${comments.length})`;
};

export default { renderComments, populateComments };