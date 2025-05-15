import styled from "styled-components";

export const ButtonContainer = styled.button.attrs({
  type: "button"
})<React.ButtonHTMLAttributes<HTMLButtonElement>>`
  padding: 10px 20px;
  background-color: #7159c1;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #5a47a3;
  }
`;
