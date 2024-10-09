import React from 'react';
import styled from 'styled-components';

const LockEmoji = styled.div`
  font-size: 84px;
  margin-bottom: 20px;
`;

const LockIcon: React.FC = () => {
  return <LockEmoji>🔐</LockEmoji>;
};

export default LockIcon;
