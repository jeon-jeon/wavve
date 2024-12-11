import MovieGrid from "@/components/MovieGrid";

const Page = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5ODg0MGNlZDBiMTNlOWNiYzA4NTgwODRhMWJiYyIsIm5iZiI6MTczMzc4OTIxMC4xNTEsInN1YiI6IjY3NTc4NjFhZjgxYmNkYjljYjYzMWQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8bhdRV3z0yy4cQ2ooRvOG1xXC3Iot4f56t-Ae9tTDM",
    },
  };

  const nowPlaying_movies = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1",
    options
  )
    .then((res) => res.json())
    .then((v) => v.results);

  console.log(nowPlaying_movies);
  return (
    <section className="max-w-screen-lg m-auto flex flex-col py-10 gap-6">
      <MovieGrid list={nowPlaying_movies} />
    </section>
  );
};

export default Page;
