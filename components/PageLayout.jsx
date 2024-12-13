"use client";
import { API } from "@/constants/api";
import MovieCard from "./MovieCard";
import Link from "next/link";
import { useState } from "react";

const PageLayout = ({ title, genreList, movieList }) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [movieArr, setMovieArr] = useState(movieList);

  const change = (e) => {
    const selectedGenre = parseInt(e.target.value, 10);
    setSelectedValue(selectedGenre);
    setMovieArr(() => {
      if (selectedGenre === 0) return movieList;
      return movieList.filter((v) => v.genre_ids.includes(selectedGenre));
    });
  };

  return (
    <section className="max-w-screen-lg m-auto py-10 gap-6">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold">{title}</span>
        <select onChange={change} className="text-black p-2 rounded-lg">
          {genreList.map((v, i) => (
            <option key={i} value={v.id}>
              {v.name}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full grid grid-cols-4 py-6">
        {movieArr.map((v, i) => (
          <Link key={i} href={`/movies/${v.id}`}>
            <MovieCard
              imgSrc={API.movie.image + v.poster_path}
              title={v.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PageLayout;
