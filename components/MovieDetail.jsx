import GenresBadge from "./genresBadge";

const MovieDetail = ({ title, imgSrc, overview, backdrop_path, genres }) => {
  return (
    <>
      <article
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          backgroundSize: "cover",
          opacity: 0.3,
          position: "relative",
        }}
      ></article>
      <article className="flex gap-5 absolute top-32 left-60 max-w-screen-md">
        <img className="w-64" src={imgSrc} alt="" />
        <div className="flex flex-col gap-5">
          <span className="text-2xl">{title}</span>
          <div className="flex gap-3">
            {genres.map((v, i) => (
              <GenresBadge key={i} name={v.name}></GenresBadge>
            ))}
          </div>
          <p>{overview}</p>
        </div>
      </article>
    </>
  );
};

export default MovieDetail;
