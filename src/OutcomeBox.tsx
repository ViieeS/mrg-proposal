import styled from 'styled-components';

const OutcomeBox = styled.div<{ isPositive: boolean }>`
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-size: 48px;
  width: 45%;
`;

export default OutcomeBox;
