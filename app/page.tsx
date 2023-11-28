import "./index.scss";
import Slider from "@/components/slider/sider";
export default function Home() {
  // const carOptions = [
  //   { value: '1', label: 'Audi' },
  //   { value: '2', label: 'BMW' },
  // ];
  return (
    <>
    {/*<SelectIcon heading="car" options={carOptions} icon="Calendar"/> */}
    {/* <HeadingDescription heading="Popular Destinations" description="World's best tourist destinations"/> */}
    <Slider />
    </>
  )
}
