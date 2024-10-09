import React from 'react';

import FlowElement from './FlowElement';

const VerticalLine: React.FC = () => {
  return (
    <FlowElement
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
    </FlowElement>
  );
};

export default VerticalLine;
