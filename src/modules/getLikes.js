const LIKES_API_ENDPOINT = process.env.LIKESAPIPATH || '';

export const getLikes = async () => {
  const res = await fetch(LIKES_API_ENDPOINT);
  const data = await res.json();
  // console.log(data);
  return data;
};

export default getLikes;