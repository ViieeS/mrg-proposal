import styled from "styled-components";

const InlineInput = styled.input`
  width: 300px;
  padding: 10px;
  padding-right: 5px;
  font-size: 1.25rem;
  text-align: left;
  outline: none;
  background: none;
  border: none;

  &:focus {
    border-color: #005f99;
  }
`;

export default InlineInput;
