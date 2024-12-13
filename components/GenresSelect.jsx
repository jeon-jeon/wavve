import { API, OPTIONS } from "@/constants/api";
import SelectBox from "./SelectBox";
import { getGenreAPI } from "@/util/function";

const GenresSelect = async () => {
  return (
    <>
      <SelectBox list={await getGenreAPI(API.movie.genre, OPTIONS)} />
    </>
  );
};

export default GenresSelect;
