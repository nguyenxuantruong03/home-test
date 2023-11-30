import PopularDestination from "@/components/popular/popular";
import Slider from "@/components/slider/sider";
import BestValueTrip from "@/components/best-trip/best-trip";
import ChooseUs from "@/components/choose-us/choose-us";
import News from "@/components/news/new";
import CoverImage from "@/components/cover-image/cover-image";
export default function Home() {
  return (
    <>
    <Slider />
    <PopularDestination />
    <BestValueTrip />
    <ChooseUs />
    <CoverImage />
    <News />
    </>
  )
}
