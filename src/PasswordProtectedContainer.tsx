import React, { useState } from 'react';
import PasswordScreen from './PasswordScreen';

const PasswordProtectedContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isUnlocked, setUnlocked] = useState(false);

  const handlePasswordValid = () => {
    setUnlocked(true);
  };

  if (!isUnlocked) {
    return <PasswordScreen onPasswordValid={handlePasswordValid} />;
  }

  return children;
};

export default PasswordProtectedContainer;
