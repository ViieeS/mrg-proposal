import styled from "styled-components";

const IntroBlockContainer = styled.div`
  margin-bottom: 30px;
  font-style: italic;
  font-family: cursive, serif;
  font-size: 18px;
  line-height: 1.4;
`;

const IntroBlock: React.FC = () => {
  return (
    <IntroBlockContainer>
      <div>
        <p>
          « Мы прошли тысячи километров навстречу друг другу, и я хочу
          продолжить этот путь <b>вместе с тобой</b>.
        </p>
        <p>
          Давай превратить нашу жизнь в <b>бесконечное путешествие</b>! »
        </p>
      </div>
      <div style={{ textAlign: "right" }}>— твой Валерочка</div>
    </IntroBlockContainer>
  );
};

export default IntroBlock;
