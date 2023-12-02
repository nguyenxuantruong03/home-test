import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Currency from "./currency";

interface CardProductProps {
  url: string;
  heading: string;
  review?: number | string;
  isOnsasle?: boolean;
  star: number;
  value?: number | string;
  valueold?: number | string;
}

const CardNavbarProduct: React.FC<CardProductProps> = ({
  url,
  heading,
  review,
  isOnsasle,
  star,
  value,
  valueold
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
    <div className="card-navbar-product-screen">
          {isOnsasle && <span className="card-product-sale">Sale</span>}
      <div>
        <Image
          src={url}
          alt="image"
          width="265"
          height="200"
          className="card-navbar-product-image"
        />
      </div>
      <Currency
        value={value}
        valueold={valueold}
      />
      <div className="card-navbar-product-wrapper">
        <div className="card-navbar-product-heading">{heading}</div>
        <div className="card-navbar-product-review">
          <span className="card-navbar-product-start">
          {renderStars(Number(star))}
            <span>{review} reviews</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardNavbarProduct;
