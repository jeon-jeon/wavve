import MovieDetail from "@/components/MovieDetail";

const Page = async ({ params }) => {
  const { id } = params;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5ODg0MGNlZDBiMTNlOWNiYzA4NTgwODRhMWJiYyIsIm5iZiI6MTczMzc4OTIxMC4xNTEsInN1YiI6IjY3NTc4NjFhZjgxYmNkYjljYjYzMWQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8bhdRV3z0yy4cQ2ooRvOG1xXC3Iot4f56t-Ae9tTDM",
    },
  };

  const detail_movie = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    options
  ).then((res) => res.json());

  const url = "https://image.tmdb.org/t/p/original";

  console.log(detail_movie);

  return (
    <section className="w-screen h-screen">
      <MovieDetail
        backdrop_path={url + detail_movie.backdrop_path}
        imgSrc={url + detail_movie.poster_path}
        title={detail_movie.title}
        overview={detail_movie.overview}
        genres={detail_movie.genres}
      />
    </section>
  );
};

export default Page;
