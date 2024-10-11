import styled from "styled-components";

const IconButton = styled.button`
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0;
  padding: 5px;

  &:hover {
    opacity: 0.8;
  }

  transition: all 0.3s ease-in-out;
`;

export default IconButton;
