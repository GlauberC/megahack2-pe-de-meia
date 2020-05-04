import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text} from 'react-native';

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
  ViewDigital,
} from './styles';

const LoginPage = () => {
  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container>
      <Form>
        <TextIntro>Bem vindo de volta!</TextIntro>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <BtnForgetPassword>
          <BtnForgetPasswordText>
            Esqueceu sua senha? Clique aqui
          </BtnForgetPasswordText>
        </BtnForgetPassword>
        <ViewBtns>
          <BtnNavigate onPress={navigateToSignUp}>
            <BtnNavigateText>Cadastre-se</BtnNavigateText>
          </BtnNavigate>
          <BtnNavigate submit="true">
            <BtnNavigateText submit="true">Entrar</BtnNavigateText>
          </BtnNavigate>
        </ViewBtns>
      </Form>
      <ViewDigital>
        <Text>Digital</Text>
      </ViewDigital>
    </Container>
  );
};

export default LoginPage;
