import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-screen-lg m-auto py-5">
      <nav className="flex gap-12">
        <Link href={"/"}>
          <img src="https://www.wavve.com/img/ci-wavve.5b304973.svg" alt="" />
        </Link>

        <ul className="flex gap-8 text-lg font-bold items-center">
          <Link href={"/movies"}>
            <li className="hover:text-gray-300">영화</li>
          </Link>
          <Link href={"/movies/now_playing"}>
            <li className="hover:text-gray-300 text-base">현재상영작</li>
          </Link>
          <Link href={"/movies/upcoming"}>
            <li className="hover:text-gray-300 text-base">개봉예정작</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
