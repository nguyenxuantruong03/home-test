import PopularDestination from "@/components/popular/popular";
import "./index.scss";
import Slider from "@/components/slider/sider";
import BestValueTrip from "@/components/best-trip/best-trip";
import ChooseUs from "@/components/choose-us/choose-us";
import News from "@/components/news/new";
export default function Home() {
  return (
    <>
    <Slider />
    <PopularDestination />
    <BestValueTrip />
    <ChooseUs />
    <News />
    </>
  )
}
