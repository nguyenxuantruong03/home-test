import Image from "next/image";
import HeadingDescription from "./Hed-Des";

const SettingModal = () => {
  return (
    <div className="settingmodal-screen">
        <HeadingDescription
            heading="Created With Grand Tour"
            description="We designed Grand Tour theme to make it works especially for tour & travel site. Here are a few included examples that you can import with one click."
            fontweightdes="0"
            fontweighthed="600"
            fontSizeheading="15px"
            fontSizedescription="12px"
            marginhed="20px"
        />
        <div className="settingmodal-image">
            <div className="settingmodal-image-1">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
            <div className="settingmodal-image-2">
            <div className="image-container">
                <Image
                src="/images/settingmodal-2.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
        </div>
        <div className="setttingmodal-color">
        <HeadingDescription
            heading="Predefined Colors"
            fontweightdes="0"
            fontweighthed="600"
            fontSizeheading="15px"
            fontSizedescription="12px"
            marginhed="20px"
        />
            <span className="setttingmodal-color-cricle"></span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"> </span>    
            <span className="setttingmodal-color-cricle"></span>    
        </div> 
        <div className="settingmodal-styling">
        <HeadingDescription
            heading="Predefined Stylings"
            fontweightdes="0"
            fontweighthed="600"
            fontSizeheading="15px"
            fontSizedescription="12px"
            marginhed="20px"
        />
         <div className="settingmodal-styling-image">
         <div className="settingmodal-image-1">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>Nguyen Xuan Truong 123123123123123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
            <div className="settingmodal-image-2">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div> <div className="settingmodal-image-1">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
            <div className="settingmodal-image-2">
            <div className="image-container">
                <Image
                src="/images/settingmodal-3.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div> <div className="settingmodal-image-1">
            <div className="image-container">
                <Image
                src="/images/settingmodal-4.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
            <div className="settingmodal-image-2">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div> <div className="settingmodal-image-1">
            <div className="image-container">
                <Image
                src="/images/settingmodal-1.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
            <div className="settingmodal-image-2">
            <div className="image-container">
                <Image
                src="/images/settingmodal-2.jpg"
                alt="image"
                width="138"
                height="80"
                className="image"
                />
                <div className="overlay">
                <h2>123</h2>
                <button>Launch</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default SettingModal;