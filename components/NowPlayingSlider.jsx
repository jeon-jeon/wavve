import { getMovieAPI } from "@/util/function";
import CardSwiper from "./CardSwiper";
import { API, OPTIONS } from "@/constants/api";
import SliderTitle from "./SliderTitle";

const NowPlayingSlider = async () => {
  return (
    <section>
      <SliderTitle title={"현재상영작"} link={`/movies/now_playing`} />
      <CardSwiper list={await getMovieAPI(API.movie.nowPlaying, OPTIONS)} />
    </section>
  );
};

export default NowPlayingSlider;
