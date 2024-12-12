export const getMovieAPI = (url, options) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((v) => v.results);

export const getDetailAPI = (url, options) =>
  fetch(url, options).then((res) => res.json());
