import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
`;

export const Form = styled.form<React.FormHTMLAttributes<HTMLFormElement>>`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #555;
  font-weight: 500;
`;

export const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    border-color: #7159c1;
    outline: none;
  }
`;

export const ErrorText = styled.span`
  color: #d93025;
  font-size: 14px;
  margin-top: 4px;
  display: block;
`;
