import GenresBadge from "./GenresBadge";

const MovieDetail = ({
  backdrop_path,
  poster_path,
  title,
  release_date,
  runtime,
  tagline,
  genres,
  overview,
}) => {
  return (
    <section className="w-screen h-screen">
      <article
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backdrop_path})`,
          backgroundSize: "cover",
          opacity: 0.3,
          position: "relative",
        }}
      ></article>
      <article className="max-w-screen-md flex gap-5 absolute top-1/4 left-1/4">
        <img className="w-64" src={poster_path} alt="" />
        <div className="flex flex-col gap-5">
          <span className="text-2xl font-semibold">{title}</span>
          <div className="flex gap-3">
            <span>{release_date}</span>
            <span>{runtime}분</span>
          </div>
          <p>{tagline}</p>
          <div className="flex gap-3">
            {genres.map((v, i) => (
              <GenresBadge key={i} name={v.name}></GenresBadge>
            ))}
          </div>
          <p>{overview}</p>
        </div>
      </article>
    </section>
  );
};

export default MovieDetail;
