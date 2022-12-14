import { renderComments, populateComments } from './modules/renderComments.js';

const BASECOMMENTSAPI = process.env.BASECOMMENTSAPI || '';
const APPENDPOINTID = process.env.APPENDPOINTID || '';

let itemId = '';

const grabId = async () => {
  document.querySelectorAll('.comment-form').forEach((button) => {
    button.addEventListener('submit', async (e) => {
      e.preventDefault();

      itemId = button.id;

      const inputNameTag = document.getElementById(`input-name-${itemId}`);
      const inputCommentsTag = document.getElementById(`input-comments-${itemId}`);

      const APIEndpoint = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments`,
      );

      await fetch(APIEndpoint, {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username: inputNameTag.value,
          comment: inputCommentsTag.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response)
        .catch((error) => error);

      inputNameTag.value = '';
      inputCommentsTag.value = '';

      const API_PATH = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments?item_id=${itemId}`,
      );
      const comments = await renderComments(API_PATH);

      populateComments(comments, itemId);
    });
  });
};

const fillComments = async () => {
  document.querySelectorAll('.view-more').forEach((detailButton) => {
    detailButton.addEventListener('click', async () => {
      const itemId = detailButton.id;

      const API_PATH = BASECOMMENTSAPI.concat(
        `apps/${APPENDPOINTID}/comments?item_id=${itemId}`,
      );

      const comments = await renderComments(API_PATH);
      const listItems = document.createElement('ul');
      listItems.className = 'comment-items';
      populateComments(comments, itemId, listItems);
    });
  });
};

export const popupArrange = async () => {
  await fillComments();
  await grabId();
};

export default { popupArrange };