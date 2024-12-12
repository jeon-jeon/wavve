import Link from "next/link";
import MovieCard from "./MovieCard";
import { API } from "@/constants/api";

const MovieGrid = ({ list }) => {
  return (
    <section className="max-w-screen-lg m-auto py-10 gap-6">
      <article className="w-full grid grid-cols-4 gap-3 py-6">
        {list.map((v, i) => (
          <Link href={`/movies/${v.id}`}>
            <MovieCard
              key={i}
              imgSrc={API.movie.image + v.poster_path}
              title={v.title}
            />
          </Link>
        ))}
      </article>
    </section>
  );
};

export default MovieGrid;
