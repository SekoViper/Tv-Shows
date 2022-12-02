// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const counterCommentsMock = async (API_PATH) => {
  const fetchData = await axios(API_PATH, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.data)
    .catch((error) => error);
  return fetchData;
};

export default { counterCommentsMock };