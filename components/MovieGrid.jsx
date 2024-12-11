import Link from "next/link";
import MovieCard from "./MovieCard";

const MovieGrid = ({ list }) => {
  const url = "https://image.tmdb.org/t/p/original";
  return (
    <article>
      <div className="w-full grid grid-cols-4 gap-3 py-6">
        {list.map((v, i) => (
          <Link href={`/movies/${v.id}`}>
            <MovieCard key={i} imgSrc={url + v.poster_path} title={v.title} />
          </Link>
        ))}
      </div>
    </article>
  );
};

export default MovieGrid;
