import NowPlayingSlider from "@/components/NowPlayingSlider";
import UpcomingSlider from "@/components/UpcomingSlider";

const Page = () => {
  return (
    <section className="max-w-screen-lg m-auto pb-12">
      <NowPlayingSlider />
      <UpcomingSlider />
    </section>
  );
};

export default Page;
