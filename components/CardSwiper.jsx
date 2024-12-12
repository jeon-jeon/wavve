"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { API } from "@/constants/api";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const CardSwiper = ({ list }) => {
  return (
    <article className="w-full h-1/2 relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        loop={true}
        slidesPerView={4}
        className="w-full h-full p-5"
      >
        <span className="custom-prev absolute top-[40%] left-1 z-10 bg-black/50">
          <MdNavigateBefore size={30} />
        </span>
        <span className="custom-next absolute top-[40%] right-1 z-10  bg-black/50">
          <MdNavigateNext size={30} />
        </span>

        {list.map((v, i) => (
          <SwiperSlide key={i}>
            <Link href={`/movies/${v.id}`}>
              <MovieCard
                imgSrc={API.movie.image + v.poster_path}
                title={v.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
};

export default CardSwiper;
