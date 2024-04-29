import httpInstance from '../httpInstance';

export const getNowPlaying = async () => {
  let res: any;
  const endpoint = `now_playing?api_key=${process.env.REACT_APP_MDB_API_KEY}&lenguage=en-US`;
  await httpInstance.get(endpoint)
    .then((data) => {
      res = data;
    }).catch((err) => {
      res = err.response;
    });
  return res;
};

