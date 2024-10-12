import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import ConfirmButton from "./ConfirmButton";
import InputContainer from "./InputContainer";
import validatePassword from "./validatePassword";
import LockIcon from "./LockIcon";
import senitizeSpecialСharacters from "./senitizeSpecialCharacters";

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
      <LockIcon />
      <Container>
        <Label htmlFor="secure-input">Enter Password:</Label>
        <InputContainer>
          <Input
            type="text"
            id="secure-input"
            placeholder="**********"
            value={password}
            style={{
              WebkitTextSecurity: "disc",
            } as React.CSSProperties}
            onChange={handlePasswordChange}
          />
          <ConfirmButton onClick={handleConfirm}>Подтвердить</ConfirmButton>
        </InputContainer>
      </Container>
    </Wrapper>
  );
};

export default PasswordScreen;
