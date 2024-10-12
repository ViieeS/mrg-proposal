import styled from "styled-components";

const IntroBlockContainer = styled.div`
  margin-bottom: 50px;
  font-style: italic;
`;

const IntroBlock: React.FC = () => {
  return (
    <IntroBlockContainer>
      <p>
        Мы прошли тысячи километров навстречу друг другу, и я хочу продолжить
        этот путь вместе с тобой.
      </p>
      <p>Давай превратить нашу жизнь в бесконечное путешествие!</p>
    </IntroBlockContainer>
  );
};

export default IntroBlock;
