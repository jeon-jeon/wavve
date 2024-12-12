import MovieDetail from "@/components/MovieDetail";
import { API, OPTIONS } from "@/constants/api";
import { getDetailAPI } from "@/util/function";

const Page = async ({ params }) => {
  const { id } = params;

  const detail = await getDetailAPI(API.movie.detailKr(id), OPTIONS);
  const detail_en = await getDetailAPI(API.movie.detailEn(id), OPTIONS);

  return (
    <>
      <MovieDetail
        backdrop_path={API.movie.image + detail.backdrop_path}
        poster_path={API.movie.image + detail.poster_path}
        title={detail.title}
        release_date={detail.release_date}
        runtime={detail.runtime}
        tagline={detail.tagline || detail_en.tagline}
        genres={detail.genres}
        overview={detail.overview || detail_en.overview}
      />
    </>
  );
};

export default Page;
