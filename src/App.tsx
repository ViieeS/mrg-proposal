import React from 'react';
import MarriageProposalFlowchart from './MarriageProposalFlowchart';
import GlobalStyle from './GlobalStyle';
import PasswordProtectedContainer from './PasswordProtectedContainer';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <PasswordProtectedContainer>
          <MarriageProposalFlowchart />
        </PasswordProtectedContainer>
      </div>
    </>
  );
};

export default App;
