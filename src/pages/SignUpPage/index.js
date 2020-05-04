import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Form,
  TextIntro,
  Input,
  BtnForgetPassword,
  BtnForgetPasswordText,
  ViewBtns,
  BtnNavigate,
  BtnNavigateText,
} from './styles';

const SignUpPage = () => {
  const navigation = useNavigation();

  function navigateBackToLogin() {
    navigation.goBack();
  }
  function navigateToProfileQuestions() {
    navigation.navigate('ProfileQuestions');
  }

  function handleSignUp() {
    // TODO: SignUP

    navigateToProfileQuestions();
  }

  return (
    <Container>
      <Form>
        <TextIntro>Bem vindo ao clube!</TextIntro>
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
        <Input placeholder="Confirme sua senha" secureTextEntry />
        <BtnForgetPassword onPress={navigateBackToLogin}>
          <BtnForgetPasswordText>
            Já é cadastrado? Clique aqui para entrar!
          </BtnForgetPasswordText>
        </BtnForgetPassword>
        <ViewBtns>
          <BtnNavigate submit="true" onPress={handleSignUp}>
            <BtnNavigateText submit="true">Cadastrar</BtnNavigateText>
          </BtnNavigate>
        </ViewBtns>
      </Form>
    </Container>
  );
};

export default SignUpPage;
