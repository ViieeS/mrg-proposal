import React from "react";
import FadeInBlock from "./FadeInBlock";
import useTimer from "./useTimer";

interface Props {
  delayMs?: number;
}

const DelayedFadeInBlock: React.FC<React.PropsWithChildren<Props>> = ({
  delayMs = 0,
  children,
}) => {
  const isVisible = useTimer(delayMs);

  return <FadeInBlock $isVisible={isVisible}>{children}</FadeInBlock>;
};

export default DelayedFadeInBlock;
