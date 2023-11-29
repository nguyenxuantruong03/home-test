import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface CardNewProps {
  url: string;
  heading: string;
  description: string;
  date: string;
}

const CardNew: React.FC<CardNewProps> = ({
  url,
  heading,
  description,
  date
}) => {
  return (
    <div className="card-new-screen">
      <div>
        <Image
          src={url}
          alt="image"
          width="395"
          height="262"
          className="card-new-image"
        />
      </div>
      <div className="card-new-wrapper">
        <div className="card-new-date">{date}</div>
        <div className="card-new-heading">{heading}</div>
        <div className="card-new-description">{description}</div>
      </div>

      <div className="card-new-readmore">Read More  <ChevronRight width="18"/></div>
    </div>
  );
};

export default CardNew;
