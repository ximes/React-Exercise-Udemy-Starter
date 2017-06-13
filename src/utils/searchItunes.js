import axios from 'axios';

const searchiTunes = (searchItem) => new Promise((resolve, reject) => {
  const result = axios.get(`https://itunes.apple.com/search?term=${searchItem}&media=music`);
  result
    .then(({ data }) => resolve(data))
    .catch((err) => reject(err));
});

export default searchiTunes;
