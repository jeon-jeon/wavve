import MovieGrid from "@/components/MovieGrid";
import { API, OPTIONS } from "@/constants/api";
import { getMovieAPI } from "@/util/function";

const Page = async () => {
  return (
    <>
      <MovieGrid list={await getMovieAPI(API.movie.nowPlaying, OPTIONS)} />
    </>
  );
};

export default Page;
