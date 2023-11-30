import Image from "next/image";
import "./index.scss"
import { AlarmClock, MapPin, Smartphone } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle  } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
const FooterComponent = () => {
    return ( 
        <div className="footer-screen">
            <div className="footer-wrapper">
                <div className="footer-awards">
                    <h1 className="footer-title">Our Awards</h1>
                    <p className="footer-awards-description">London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                    <Image 
                    src="/images/awards.png"
                    width="246"
                    height="113"
                    alt="123"
                    className="footer-awards-image"
                    />
                </div >
                <div className="footer-contact">
                    <h1 className="footer-title">Contact Info</h1>
                    <div className="footer-contact-info"><Smartphone className="footer-contact-icon" width="18"/> 1-567-124-44227</div>
                    <div className="footer-contact-info footer-contact-info-margin-top"><MapPin className="footer-contact-icon" width="18"/> 184 Main Street East Perl Habour 8007</div>
                    <div className="footer-contact-info footer-contact-info-margin-top"><AlarmClock className="footer-contact-icon" width="18"/> Mon - Sat 8.00 - 18.00 Sunday CLOSED</div>
                    <div className="footer-social">
                    <span className="footer-facebook"><FaFacebook className="footer-facebook-icon"/></span>
                    <span className="footer-twitter"><AiFillTwitterCircle className="footer-twitter-icon"/></span>
                    <span className="footer-youtube"><TiSocialYoutubeCircular className="footer-youtube-icon"/></span>
                    <span className="footer-pinterest"><BsPinterest className="footer-pinterest-icon"/></span>
                    <span><FiInstagram className="footer-instagram-icon"/></span>
                    </div>
                </div>
                <div className="footer-recent">
                <h1 className="footer-title">Recent Trips</h1>
                <Image 
                    src="/images/recent-trip-1.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image"
                    />
                    <Image 
                    src="/images/recent-trip-2.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image"
                    />
                    <Image 
                    src="/images/recent-trip-3.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image-border-not-margin-right"
                    />
                    <Image 
                    src="/images/recent-trip-4.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image footer-recent-image-margin-top"
                    />
                    <Image 
                    src="/images/recent-trip-5.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image footer-recent-image-margin-top"
                    />
                    <Image 
                    src="/images/recent-trip-6.jpg"
                    width="125"
                    height="125"
                    alt="123"
                    className="footer-recent-image-border-not-margin-right footer-recent-image-margin-top"
                    />
                </div>
            </div>
                    <footer className="footer-copyright">
                        <div className='footer-copyright-wrapper'>
                            <span className="footer-copyright-text">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</span>
                            <span className="footer-copyright-title">
                                <p className="footer-copy-right-title-space">Home</p>
                                <p className="footer-copy-right-title-space">Tour</p>
                                <p className="footer-copy-right-title-space">Blog</p>
                                <p className="footer-copy-right-title-space">Purchase Theme</p>
                            </span>
                        </div>
                    </footer>
        </div>
     );
}
 
export default FooterComponent;