import React from 'react';
import { PUBLIC_URL } from './constatns';

const NyancatMusic: React.FC = () => {
  return <audio src={`${PUBLIC_URL}/nyancat.ogg`} loop autoPlay preload="auto"/>;
};

export default NyancatMusic;
