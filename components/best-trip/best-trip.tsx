import HeadingDescription from "../uis/Hed-Des";
import CardProduct from "../uis/card-product";
import "./besttrip.scss";
const BestValueTrip = () => {
  return (
    <div className="screen-valuetrip">
      <div>
        <HeadingDescription
          heading="Best Value Trips"
          description="Best offers trips from us"
        />
      </div>
      <div className="content-besttrip">
        <CardProduct
          url="/images/besttrip-1.jpeg"
          heading="French Autumn"
          description="City Tours, Urban"
          date={5}
          review={4}
          value={50}
          star = {3}
        />
        <CardProduct
          url="/images/besttrip-2.jpeg"
          heading="Grand Switzerland"
          description="Shopping, Mountain, Snow & Ice"
          date={6}
          review={4}
          value={60}
          star = {4}
        />
        <CardProduct
          url="/images/besttrip-3.jpeg"
          heading="Discover"
          description="City Tours, Iconic"
          date={5}
          review={4}
          value={25}
          valueold={30}
          isOnsasle={true}
          star ={5}
        />
      </div>
    </div>
  );
};

export default BestValueTrip;
