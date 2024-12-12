"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import { API } from "@/constants/api";

const MainSwiper = ({ list }) => {
  return (
    <section className="w-screen h-[90vh] pt-20">
      <Swiper
        className="w-full h-[80%]"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {list.map((v, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: "70%",
              backgroundImage: `url(${API.movie.image}${v.backdrop_path})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "relative",
            }}
          >
            <div className="absolute bottom-[10%] left-[15%] flex flex-col gap-4">
              <span className="text-3xl font-bold">{v.title}</span>
              <button
                type="button"
                className="border border-white w-28 h-10 font-semibold"
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
    </section>
  );
};

export default MainSwiper;
