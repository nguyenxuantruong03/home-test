import Video from "../uis/video";
import "./slider.scss";
const Slider = () => {
  const carOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "Match" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "Octorber" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];
  const arrowUpDownOptions = [
    { value: "1", label: "Price Low to High" },
    { value: "2", label: "Price High to Low" },
    { value: "3", label: "Sort By Name" },
    { value: "4", label: "Sort By Popularity" },
    { value: "5", label: "Sort By Review Score" },
  ];
  const allCategoryOptions = [
    { value: "1", label: "Mountain" },
    { value: "2", label: "Rural" },
    { value: "3", label: "Snow" },
    { value: "4", label: "Sort By Popularity" },
    { value: "5", label: "Sort By Review Score" },
  ];
  const destination = [
    { value: "1", label: "Tokyo" },
    { value: "2", label: "Seoul" },
    { value: "3", label: "Paris" },
    { value: "4", label: "London" },
    { value: "5", label: "Venice" },
    { value: "6", label: "Miami" },
    { value: "7", label: "Rome" },
    { value: "8", label: "Prague" },
    { value: "9", label: "California" },
    { value: "10", label: "Kyoto" },
    { value: "11", label: "Hong Kong" },
    { value: "12", label: "Santorini" },
  ];
  return (
    <>
      {/* Có thể dùng trực tiếp ở đây */}
      {/* <div className="parallax">
    <video  loop muted autoPlay>
      <source src="/video/sliderr.mp4" type="video/mp4" />
    </video>
  </div> */}
      <Video
        url="/video/sliderr.mp4"
        options1={carOptions}
        options2={arrowUpDownOptions}
        options3={allCategoryOptions}
        options4={destination}
      />

      <div className="content">
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </>
  );
};

export default Slider;
