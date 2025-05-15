import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  ErrorText,
  Title
} from "./styles";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm<FormData>({
    mode: "onChange"
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados de login:", data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            {...register("email", {
              required: "Email é obrigatório",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Formato de email inválido"
              }
            })}
          />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label>Senha</Label>
          <Input
            type="password"
            {...register("password", {
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter no mínimo 6 caracteres"
              }
            })}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </FormGroup>

        <Button title="Entrar" disabled={!isValid} />
      </Form>
    </Container>
  );
};

export default LoginForm;
