export const getMovieAPI = (url, options) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((v) => v.results);

export const getDetailAPI = (url, options) =>
  fetch(url, options).then((res) => res.json());

export const getGenreAPI = (url, options) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((v) => v.genres)
    .then((v) => [{ id: 0, name: "전체" }, ...v]);
