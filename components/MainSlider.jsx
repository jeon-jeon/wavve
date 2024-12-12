import { API, OPTIONS } from "@/constants/api";
import MainSwiper from "./MainSwiper";
import { getMovieAPI } from "@/util/function";

const MainSlider = async () => {
  return (
    <>
      <MainSwiper list={await getMovieAPI(API.movie.popular, OPTIONS)} />
    </>
  );
};

export default MainSlider;
