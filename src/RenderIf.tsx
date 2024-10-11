import React, { PropsWithChildren } from "react";

interface Props {
  value: unknown;
}

const RenderIf: React.FC<PropsWithChildren<Props>> = (props) => {
  return props.value ? <>{props.children}</> : null;
};

export default RenderIf;
