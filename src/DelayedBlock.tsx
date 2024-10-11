import React from "react";
import RenderIf from "./RenderIf";
import useTimer from "./useTimer";

interface Props {
  delayMs?: number;
}

const DelayedBlock: React.FC<React.PropsWithChildren<Props>> = ({
  delayMs = 0,
  children,
}) => {
  const isVisible = useTimer(delayMs);

  return <RenderIf value={isVisible}>{children}</RenderIf>;
};

export default DelayedBlock;
