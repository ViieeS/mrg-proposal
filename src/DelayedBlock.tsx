import React, { useEffect, useState } from 'react';
import FadeInBlock from './FadeInBlock';

interface Props {
  delayMs?: number;
}

const DelayedBlock: React.FC<React.PropsWithChildren<Props>> = ({
  delayMs = 0,
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delayMs);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [delayMs]);

  return <FadeInBlock isVisible={isVisible}>{children}</FadeInBlock>;
};

export default DelayedBlock;
