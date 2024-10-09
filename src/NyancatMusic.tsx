import React from 'react';

const NyancatMusic: React.FC = () => {
  return <audio src={`${process.env.PUBLIC_URL}/nyancat.ogg`} loop autoPlay preload="auto"/>;
};

export default NyancatMusic;
