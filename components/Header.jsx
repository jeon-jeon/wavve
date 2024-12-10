import Link from "next/link";

const Header = () => {
  return (
    <header className="container lg m-auto py-5">
      <nav className="flex gap-10">
        <Link href={"/"}>
          <img src="https://www.wavve.com/img/ci-wavve.5b304973.svg" alt="" />
        </Link>

        <ul className="flex gap-7 text-lg">
          <Link href={"/movies"}>
            <li className="hover:text-gray-300">영화</li>
          </Link>
          <Link href={"/tv"}>
            <li className="hover:text-gray-300">TV프로그램</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
