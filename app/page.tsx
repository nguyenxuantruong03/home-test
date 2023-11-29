import PopularDestination from "@/components/popular/popular";
import "./index.scss";
import Slider from "@/components/slider/sider";
import BestValueTrip from "@/components/best-trip/best-trip";
export default function Home() {
  return (
    <>
    <Slider />
    <PopularDestination />
    <BestValueTrip />
    </>
  )
}
