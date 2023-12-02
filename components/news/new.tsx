import HeadingDescription from "../uis/Hed-Des";
import CardNew from "../uis/card-news";
import "./news.scss";
const News = () => {
  return (
    <div className="news-screen">
      <HeadingDescription
        heading="Articles & Tips"
        description="Explore some of the best tips from around the world"
        fontSizeheading="22px" 
        fontSizedescription="14px"
      />
      <div className="news-wrapper">
        <CardNew
          heading="Memorial Day to Someone Told Me to Travel"
          description="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          url="/images/new-1.jpg"
          date="december 10, 2016"
        />
        <CardNew
          heading="7 Tips For Nomads On A Budget Trips"
          description="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          url="/images/new-2.jpeg"
          date="december 10, 2016"
        />
        <CardNew
          heading="Taking A Travel Blog Victory Lap"
          description="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
          url="/images/new-3.jpg"
          date="december 10, 2016"
        />
      </div>
    </div>
  );
};

export default News;
