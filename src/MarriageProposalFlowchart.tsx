import React, { useState } from "react";

import AppContainer from "./AppContainer";
import ArrowDown from "./ArrowDown";
import checkAnswer from "./checkAnswer";
import { Congratulations } from "./Congratulations";
import {
  ANSWER_DELAY_MS,
  INTRO_DELAY_MS,
  OUTCOMES_DELAY_MS,
  PROPOSAL_DELAY_MS,
} from "./constatns";
import DelayedBlock from "./DelayedBlock";
import DelayedFadeInBlock from "./DelayedFadeInBlock";
import FlowchartContainer from "./FlowchartContainer";
import IconButton from "./IconButton";
import InlineInput from "./InlineInput";
import InlineInputContainer from "./InlineInputContainer";
import IntroBlock from "./IntroBlock";
import OutcomeBox from "./OutcomeBox";
import OutcomeBranch from "./OutcomeBranch";
import OutcomesContainer from "./OutcomesContainer";
import PaperPlaneIcon from "./PaperPlaneIcon";
import ProposalBox from "./ProposalBox";
import RenderIf from "./RenderIf";
import Typewriter from "./Typewriter";
import useProposalTypingState from "./useProposalTypingState";
import VerticalLine from "./VerticalLine";

const MarriageProposalFlowchart: React.FC = () => {
  const [userInput, setUserInput] = useState("");
  const [isProposalTyped, finishProposalTyping] = useProposalTypingState();
  const [showMeme, setShowMeme] = useState(false);

  const handleConfirm = () => {
    if (checkAnswer(userInput)) {
      setShowMeme(true);
    } else {
      alert('⛔ Нужно ввести "да"!');
    }
  };

  if (showMeme) {
    return <Congratulations />;
  }

  return (
    <>
      <AppContainer>
        <FlowchartContainer>
          <DelayedFadeInBlock delayMs={INTRO_DELAY_MS}>
            <IntroBlock />
          </DelayedFadeInBlock>

          <DelayedBlock delayMs={PROPOSAL_DELAY_MS}>
            <ProposalBox>
              <Typewriter
                text="Викуся, ты выйдешь за меня?"
                speed={200}
                onFinish={finishProposalTyping}
              />
            </ProposalBox>
          </DelayedBlock>

          <RenderIf value={isProposalTyped}>
            <DelayedFadeInBlock delayMs={OUTCOMES_DELAY_MS}>
              <OutcomesContainer>
                <OutcomeBranch>
                  {/* Yes branch */}
                  <VerticalLine />
                  <div>Да</div>
                  <ArrowDown />
                  <OutcomeBox>
                    <div>
                      <span>🎉</span>
                      <span>🍓</span>
                      <span>😻</span>
                    </div>
                    <div>
                      <span>🏖️</span>
                      <span>👩🏼‍❤️‍💋‍👨🏼</span>
                      <span>🍰</span>
                    </div>
                  </OutcomeBox>
                </OutcomeBranch>

                <OutcomeBranch>
                  {/* No branch */}
                  <VerticalLine />
                  <div>Нет</div>
                  <ArrowDown />
                  <OutcomeBox>
                    <div>😭 🥀 💔</div>
                    <div>😔 🚶‍♂️ ⚰️</div>
                  </OutcomeBox>
                </OutcomeBranch>
              </OutcomesContainer>
            </DelayedFadeInBlock>

            <DelayedFadeInBlock delayMs={ANSWER_DELAY_MS}>
              <InlineInputContainer>
                <InlineInput
                  type="text"
                  placeholder='Введи "да" чтобы продложить'
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                />
                <IconButton onClick={handleConfirm}>
                  <PaperPlaneIcon />
                </IconButton>
              </InlineInputContainer>
            </DelayedFadeInBlock>
          </RenderIf>
        </FlowchartContainer>
      </AppContainer>
    </>
  );
};

export default MarriageProposalFlowchart;
