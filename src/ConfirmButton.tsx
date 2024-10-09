import styled from 'styled-components';

const ConfirmButton = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  background-color: #0088cc;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  transition: all 0.3s ease-in-out;
`;

export default ConfirmButton;
