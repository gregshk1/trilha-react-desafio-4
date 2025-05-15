import React from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
