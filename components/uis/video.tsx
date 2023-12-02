"use client"
import React, { useState } from "react";
import "../slider/slider.scss";
import HeadingDescription from "./Hed-Des";
import { TextIcon } from "./text-icon";
import SelectIcon from "./select-icon";
import Button from "./button";
import { ChevronDown, ChevronUp } from "lucide-react";

type Option = { value: string; label: string };

type Props = {
  url: string;
  options1: Option[];
  options2: Option[];
  options3: Option[];
  options4: Option[];
};

const Video: React.FC<Props> = ({
  url,
  options1,
  options2,
  options3,
  options4,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="parallax">
      <video loop muted autoPlay>
        <source src={url} type="video/mp4" />
      </video>
      <div className="content-slider">
        <HeadingDescription
          fontSizeheading="22px"
          fontSizedescription="14px"
          heading="Where do you want to go?"
          description="Trips, experiences, and places. All in one service."
          color="white"
        />
        <div className="input-select-slider-first">
          <TextIcon icon="Search" placeholder="Destination, city" />
          <SelectIcon heading="Any Month" options={options1} icon="Calendar" />
          <SelectIcon heading="Sort By Date" options={options2} icon="ArrowUpDown" />
          <Button>Search</Button>
        </div>
      </div>
      {showMore && (
        <div className="input-select-slider-second">
          <SelectIcon heading="All Categories" options={options3} icon="ChevronDown" />
          <SelectIcon heading="Any Destinations" options={options4} icon="ChevronDown" />
          <TextIcon icon="$" placeholder="Max budget ex.500" />
        </div>
      )}
      <div onClick={toggleShowMore} className="advance-serach">
        {showMore ? <ChevronUp width="17" /> : <ChevronDown width="17" />} Advance Search
      </div>
    </div>
  );
};

export default Video