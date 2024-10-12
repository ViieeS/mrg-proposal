import React from 'react';
import { PUBLIC_URL } from './constatns';

const NyancatMusic: React.FC = () => {
  return <audio src={`${PUBLIC_URL}/nyancat.mp3`} loop autoPlay preload="auto"/>;
};

export default NyancatMusic;
