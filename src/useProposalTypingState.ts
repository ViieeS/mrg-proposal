import { useCallback, useState } from "react";

const useProposalTypingState = () => {
  const [isProposalTyped, setProposalTyped] = useState(false);

  const finishProposalTyping = useCallback(() => {
    setProposalTyped(true);
  }, []);

  return [isProposalTyped, finishProposalTyping] as const;
};

export default useProposalTypingState;
