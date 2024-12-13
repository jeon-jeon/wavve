import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

const SliderTitle = ({ title, link }) => {
  return (
    <div className="pt-10 pb-3 flex font-semibold justify-between items-end">
      <span className="text-2xl">{title}</span>
      <Link href={link}>
        <span className="text-sm flex items-center gap-1 text-gray-300">
          더보기 <MdNavigateNext />
        </span>
      </Link>
    </div>
  );
};

export default SliderTitle;
