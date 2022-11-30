const APIUrl = process.env.BASEMOVIEAPI;

export const getTVShows = async () => {
  const res = await fetch(APIUrl);
  const data = await res.json();
  return data;
};

export default getTVShows;