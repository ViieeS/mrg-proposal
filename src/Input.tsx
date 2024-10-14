import styled from 'styled-components';

const Input = styled.input`
  width: 300px;
  padding: 0.75rem;
  font-size: 1.25rem;
  border: 2px solid #0088cc;
  border-radius: 12px;
  text-align: center;
  outline: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #005f99;
  }
`;

export default Input;
