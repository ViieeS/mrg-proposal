import React, { useState } from "react";
import styled from "styled-components";
import ConfirmButton from "./ConfirmButton";
import Input from "./Input";
import InputContainer from "./InputContainer";
import LockIcon from "./LockIcon";
import PasswordScreenTitle from "./PasswordScreenTitle";
import senitizeSpecialСharacters from "./senitizeSpecialCharacters";
import validatePassword from "./validatePassword";

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 250px;
`;

const Label = styled.label`
  font-weight: bold;
`;

interface Props {
  onPasswordValid: () => void;
}

const PasswordScreen: React.FC<Props> = ({ onPasswordValid }) => {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirm = async () => {
    const senitizedPassword = senitizeSpecialСharacters(password);
    if (await validatePassword(senitizedPassword)) {
      onPasswordValid();
    } else {
      alert("Не угадала 😜");
    }
  };

  return (
    <Wrapper>
      <PasswordScreenTitle>V+V</PasswordScreenTitle>
      <LockIcon />
      <Container>
        <Label htmlFor="secure-input">Пароль:</Label>
        <InputContainer>
          <Input
            type="text"
            id="secure-input"
            placeholder="**********"
            value={password}
            style={
              {
                WebkitTextSecurity: "disc",
              } as React.CSSProperties
            }
            onChange={handlePasswordChange}
          />
          <ConfirmButton onClick={handleConfirm}>Подтвердить</ConfirmButton>
        </InputContainer>
      </Container>
    </Wrapper>
  );
};

export default PasswordScreen;
