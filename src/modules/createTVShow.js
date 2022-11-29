const APIUrl = process.env.BASEMOVIEAPI;

export const getTVShows = async () => {
  const res = await fetch(APIUrl);
  const data = await res.json();
  // console.log(data);
  return data;
};

export default getTVShows;