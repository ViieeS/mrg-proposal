import React from 'react';

import FlowElement from './FlowElement';

const ArrowDown: React.FC = () => {
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
      <polyline points="19 12 12 19 5 12" />
    </FlowElement>
  );
};

export default ArrowDown;
