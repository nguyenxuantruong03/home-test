import React from 'react';
import '../slider/slider.scss'
type Props = {
  url: string;
};

export const Video: React.FC<Props> = ({ url }) => {
  return (
    <div className="parallax">
    <video  loop muted autoPlay>
    <source src={url} type="video/mp4" />
    </video>
  </div>
  );
};

