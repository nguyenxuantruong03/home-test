import Image from "next/image";
import Currency from "./currency";
import { Clock3 } from "lucide-react";
import { FaStar } from "react-icons/fa";
import "./index.scss";
interface CardProductProps {
  url: string;
  heading: string;
  description: string;
  review?: number | string;
  date?: string | number;
  value?: number | string;
  valueold?: number | string;
  isOnsasle?: boolean;
  star: number;
}

const CardProduct: React.FC<CardProductProps> = ({
  url,
  heading,
  description,
  review,
  date,
  value,
  valueold,
  isOnsasle,
  star
}) => {
  const renderStars = (star: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar key={i} width="13" className={i < star ? 'checked' : ''}/>
      );
    }
    return stars;
  };
  return (
    <div className="card-product-screen">
          {isOnsasle && <span className="card-product-sale">Sale</span>}
      <div>
        <Image
          src={url}
          alt="image"
          width="395"
          height="262"
          className="card-product-image"
        />
      </div>
      <Currency
        value={value}
        valueold={valueold}
      />
      <div className="card-product-wrapper">
        <div className="card-product-heading">{heading}</div>
        <div className="card-product-description">{description}</div>
        <div className="card-product-review">
          <span className="card-product-start">
          {renderStars(Number(star))}
            <span>{review} reviews</span>
          </span>
          <span className="card-product-date">
            <span className="card-product-date-icon">
              <Clock3 width="14" />
            </span>
            {date} days
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
