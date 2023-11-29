import HeadingDescription from "../uis/Hed-Des";
import InfoChooseUs from "../uis/Info-choose-us";
import "./chooses-us.scss";

const ChooseUs = () => {
  return (
    <div className="screen-choose-us">
      <HeadingDescription
        heading="Why Choose Us"
        description="Here are reasons you should plan trip with us"
      />
      <div className="choose-us-wrapper">
        <InfoChooseUs
          url="/images/choose-us-1.png"
          heading="Handpicked Hotels"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
          fontweightdes="none"
          colordes="#333"
          fontSizeheading="20px"
          fontSizedescription="13px"
        />
        <InfoChooseUs
          url="/images/choose-us-2.png"
          heading="World Class Service"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
          fontweightdes="none"
          colordes="#333"
          fontSizeheading="20px"
          fontSizedescription="13px"
        />
        <InfoChooseUs
          url="/images/choose-us-3.png"
          heading="Best Price Guarantee"
          description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
          fontweightdes="none"
          colordes="#333"
          fontSizeheading="20px"
          fontSizedescription="13px"
        />
      </div>
    </div>
  );
};

export default ChooseUs;
