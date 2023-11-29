import Image from "next/image";
import "./index.scss";
import HeadingDescription from "./Hed-Des";
interface InfoChooseProps {
  url: string;
  heading: string;
  description: string;
  fontweightdes?: string | number;
  colordes?: string;
  fontSizeheading?: string;
  fontSizedescription?: string;
}

const InfoChooseUs: React.FC<InfoChooseProps> = ({
  url,
  heading,
  description,
  fontweightdes,
  colordes,
  fontSizeheading,
  fontSizedescription,
}) => {
  return (
    <div className="info-choose-us-screen">
      <div className="info-choose-us-wrapper-image">
        <Image
          src={url}
          alt="image"
          width="150"
          height="150"
          className="info-choose-us-image"
        />
      </div>
      <HeadingDescription
        heading={heading}
        description={description}
        fontweightdes={fontweightdes}
        colordes={colordes}
        fontSizeheading={fontSizeheading}
        fontSizedescription={fontSizedescription}
      />
    </div>
  );
};

export default InfoChooseUs;
