const apiUrl = process.env.BASEMOVIEAPI;

export const getApi = async () => {
  const tvShow = await fetch(apiUrl);
  const tvData = await tvShow.json();
  console.log(tvData);
};
export default getApi;
