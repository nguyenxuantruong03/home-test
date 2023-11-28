import { Video } from '../uis/video';
import './slider.scss'
const Slider = () => {
    return ( 
      <>
{/* Có thể dùng thẳng ở đây */}
{/* <div className="parallax">
    <video  loop muted autoPlay>
      <source src="/video/sliderr.mp4" type="video/mp4" />
    </video>
  </div> */}
  <Video url="/video/sliderr.mp4" />

  <div className="content">
    Scroll Up and Down this page to see the parallax scrolling effect.
    This div is just here to enable scrolling.
    Tip: Try to remove the background-attachment property to remove the scrolling effect.
  </div>
      </>
     );
}
 
export default Slider;


