import MainSwiper from "./MainSwiper";

const TvSlider = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWI5ODg0MGNlZDBiMTNlOWNiYzA4NTgwODRhMWJiYyIsIm5iZiI6MTczMzc4OTIxMC4xNTEsInN1YiI6IjY3NTc4NjFhZjgxYmNkYjljYjYzMWQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e8bhdRV3z0yy4cQ2ooRvOG1xXC3Iot4f56t-Ae9tTDM",
    },
  };
  const popular_tv = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=ko-KR&page=1",
    options
  )
    .then((res) => res.json())
    .then((v) => v.results);

  return (
    <section className="w-screen h-[50vh] py-10">
      <div className="container lg m-auto text-3xl py-5">
        인기있는 티비프로그램
      </div>
      <MainSwiper list={popular_tv} />
    </section>
  );
};

export default TvSlider;
