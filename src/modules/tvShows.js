import { getTVShows } from './createTVShow.js';
import { displayTVShows } from './displayTVShows.js';

export const show = async () => {
  const tvShow = await getTVShows();
  displayTVShows(tvShow);
  console.log('show function');
};

export default show;