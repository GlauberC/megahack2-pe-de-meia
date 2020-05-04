import React from 'react';
import {useNavigation} from '@react-navigation/native';
import fingerprint from '../../assets/images/fingerprint.png';

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
  FingerPrint,
} from './styles';

const LoginPage = () => {
  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }
  function navigateToHome() {
    navigation.navigate('Home');
  }

  function handleSignIn() {
    // TODO: Authenticate
    navigateToHome();
  }

  return (
    <Container>
      <Form>
        <TextIntro>Bem vindo de volta!</TextIntro>
        <Input placeholder="Email" />
        <Input placeholder="Senha" secureTextEntry />
        <BtnForgetPassword>
          <BtnForgetPasswordText>
            Esqueceu sua senha? Clique aqui
          </BtnForgetPasswordText>
        </BtnForgetPassword>
        <ViewBtns>
          <BtnNavigate onPress={navigateToSignUp}>
            <BtnNavigateText>Cadastre-se</BtnNavigateText>
          </BtnNavigate>
          <BtnNavigate onPress={handleSignIn} submit="true">
            <BtnNavigateText submit="true">Entrar</BtnNavigateText>
          </BtnNavigate>
        </ViewBtns>
      </Form>
      <ViewDigital>
        <FingerPrint source={fingerprint} />
      </ViewDigital>
    </Container>
  );
};

export default LoginPage;
