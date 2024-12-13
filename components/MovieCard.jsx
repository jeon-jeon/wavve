const MovieCard = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <img
        className="w-full h-full object-cover rounded-lg"
        src={imgSrc}
        alt=""
      />
      <span>{title}</span>
    </div>
  );
};

export default MovieCard;
