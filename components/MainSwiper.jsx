"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const MainSwiper = ({ list }) => {
  return (
    <Swiper
      className="w-full h-[80%]"
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      {list.map((v, i) => (
        <SwiperSlide
          key={i}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${v.backdrop_path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="absolute bottom-32 left-20 flex flex-col gap-4">
            <span className="text-2xl">{v.title}</span>
            <button
              type="button"
              className="border border-white w-28 h-10"
              onClick={() => {
                location.href = `/movies/${v.id}`;
              }}
            >
              자세히보기
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSwiper;
