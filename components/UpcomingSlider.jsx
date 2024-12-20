import { getMovieAPI } from "@/util/function";
import { API, OPTIONS } from "@/constants/api";
import SliderTitle from "./SliderTitle";
import CardSwiper from "./CardSwiper";

const UpcomingSlider = async () => {
  return (
    <section>
      <SliderTitle title={"개봉예정작"} link={`/movies/upcoming`} />
      <CardSwiper list={await getMovieAPI(API.movie.upcoming, OPTIONS)} />
    </section>
  );
};

export default UpcomingSlider;
