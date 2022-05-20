import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = `26909086-a7a0f8caac98286b7fc7ad857`;
const perPage = 12;

function fetchImages(searchValue, currentPage) {
  // console.log(searchValue);
  return axios
    .get(
      `?q=${searchValue}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data);
}

export default fetchImages;
