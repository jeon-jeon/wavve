import Link from "next/link";
import MovieCard from "./MovieCard";
import { API } from "@/constants/api";

const MovieGrid = ({ list }) => {
  return (
    // <section className="max-w-screen-lg m-auto py-10 gap-6">
    <div className="w-full grid grid-cols-4 py-6">
      {list.map((v, i) => (
        <Link key={i} href={`/movies/${v.id}`}>
          <MovieCard imgSrc={API.movie.image + v.poster_path} title={v.title} />
        </Link>
      ))}
    </div>
    // </section>
  );
};

export default MovieGrid;
