import React, { useState } from 'react';

import { Congratulations } from './Congratulations';
import ArrowDown from './ArrowDown';
import OutcomesContainer from './OutcomesContainer';
import OutcomeBranch from './OutcomeBranch';
import ConfirmButton from './ConfirmButton';
import VerticalLine from './VerticalLine';
import FlowchartContainer from './FlowchartContainer';
import AppContainer from './AppContainer';
import ProposalBox from './ProposalBox';
import OutcomeBox from './OutcomeBox';
import InputContainer from './InputContainer';
import Input from './Input';
import checkAnswer from './checkAnswer';
import DelayedBlock from './DelayedBlock';
import {
  ANSWER_DELAY_MS,
  INTRO_DELAY_MS,
  OUTCOMES_DELAY_MS,
  PROPOSAL_DELAY_MS,
} from './constatns';
import Typewriter from './Typewriter';

const MarriageProposalFlowchart: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [showMeme, setShowMeme] = useState(false);

  const handleConfirm = () => {
    if (checkAnswer(userInput)) {
      setShowMeme(true);
    } else {
      alert('⛔ Нужно ввести "да" для подтверждения!');
    }
  };

  if (showMeme) {
    return <Congratulations />;
  }

  return (
    <>
      <AppContainer>
        <FlowchartContainer>
          <Typewriter
            text="Мы прошли тысячи километров навстречу друг другу, и я хочу продолжить этот путь вместе с тобой. Давай превратить нашу жизнь в бесконечное путешествие!"
            speed={40}
          />

          <DelayedBlock delayMs={PROPOSAL_DELAY_MS}>
            <ProposalBox>Викуся, ты выйдешь за меня?</ProposalBox>
          </DelayedBlock>

          <DelayedBlock delayMs={OUTCOMES_DELAY_MS}>
            <OutcomesContainer>
              <OutcomeBranch>
                {/* Yes branch */}
                <VerticalLine />
                <div>Да</div>
                <ArrowDown />
                <OutcomeBox isPositive={true}>🎉💖🏖️😽👩‍❤️‍👨🎂</OutcomeBox>
              </OutcomeBranch>

              <OutcomeBranch>
                {/* No branch */}
                <VerticalLine />
                <div>Нет</div>
                <ArrowDown />
                <OutcomeBox isPositive={false}>😭🥀💔😔🚶‍♂️⚰️</OutcomeBox>
              </OutcomeBranch>
            </OutcomesContainer>
          </DelayedBlock>

          <DelayedBlock delayMs={ANSWER_DELAY_MS}>
            <InputContainer>
              <Input
                type="text"
                placeholder='Введи "да" чтобы продложить'
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <ConfirmButton onClick={handleConfirm}>Подтвердить</ConfirmButton>
            </InputContainer>
          </DelayedBlock>
        </FlowchartContainer>
      </AppContainer>
    </>
  );
};

export default MarriageProposalFlowchart;
