import styled from "styled-components";

const ProposalBox = styled.div`
  min-width: 350px;
  background-color: #ffffff;
  border: 2px solid #0088cc;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: nowrap;

  > div {
    flex-shrink: 0; /* Prevent shrinking */
    flex-grow: 0; /* Prevent growing */
    flex-basis: auto; /* Width based on content */
  }
`;

export default ProposalBox;
