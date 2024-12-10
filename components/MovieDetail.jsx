"use client";

const MovieDetail = ({ title, imgSrc, overview }) => {
  return (
    <article className="container lg m-auto flex gap-5">
      <img className="w-60" src={imgSrc} alt="" />
      <div className="flex flex-col gap-5">
        <span className="text-2xl">{title}</span>
        <p>{overview}</p>
      </div>
    </article>
  );
};

export default MovieDetail;
