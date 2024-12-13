const applyIdAPIKoKr = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;
const applyIdAPIEnUs = (id) =>
  `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

export const API = {
  movie: {
    image: "https://image.tmdb.org/t/p/original",

    popular: "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
    nowPlaying:
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    upcoming:
      "https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1",

    detailKr: (id) => applyIdAPIKoKr(id),
    detailEn: (id) => applyIdAPIEnUs(id),

    genre: "https://api.themoviedb.org/3/genre/movie/list?language=ko",
  },
};

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5ODg0MGNlZDBiMTNlOWNiYzA4NTgwODRhMWJiYyIsIm5iZiI6MTczMzc4OTIxMC4xNTEsInN1YiI6IjY3NTc4NjFhZjgxYmNkYjljYjYzMWQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8bhdRV3z0yy4cQ2ooRvOG1xXC3Iot4f56t-Ae9tTDM",
  },
};
