import { getTVShows } from './createTVShow.js';
import { displayTVShows } from './displayTVShows.js';
import { getLikes } from './getLikes.js';

export const show = async () => {
  const tvShow = await getTVShows();
  const like = await getLikes();
  displayTVShows(tvShow, like);
};

export default show;