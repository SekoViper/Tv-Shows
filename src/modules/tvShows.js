import { popupArrange } from '../commentUtils.js';
import { getTVShows } from './createTVShow.js';
import { displayTVShows } from './displayTVShows.js';
import { getLikes } from './getLikes.js';
import { counter } from './itemCounter.js';
import { likeCount } from './tvShowsLike.js';

export const show = async () => {
  const tvShow = await getTVShows();
  const like = await getLikes();
  await displayTVShows(tvShow, like);
  likeCount();
  popupArrange();
  counter();
};

export default show;