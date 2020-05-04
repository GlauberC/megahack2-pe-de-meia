import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ViewResult,
  Title,
  TextScore,
  TextCondition,
  Description,
  EmDescription,
  ViewBars,
  BarGroup,
  Label,
  BarContainer,
  BarProgress,
  BtnNavigate,
  BtnNavigateText,
} from './styles';

const ResultProfile = () => {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <ViewResult>
        <Title>Você marcou</Title>
        <TextScore>21 pontos</TextScore>
        <TextCondition>Endividado</TextCondition>
        <Description>
          Você se encontra no perfil <EmDescription>endividado, </EmDescription>
          mas relaxa que a gente vai te ajudar a sair dessa.
        </Description>
      </ViewResult>
      <ViewBars>
        <BarGroup>
          <Label>Endividado</Label>
          <BarContainer>
            <BarProgress progressPercent="100%" color="#E55934" />
          </BarContainer>
        </BarGroup>
        <BarGroup>
          <Label>Equilibrado Financeiramente</Label>
          <BarContainer>
            <BarProgress progressPercent="50%" color="#DBDB4B" />
          </BarContainer>
        </BarGroup>
        <BarGroup>
          <Label>Investidor</Label>
          <BarContainer>
            <BarProgress progressPercent="15%" color="#66D83D" />
          </BarContainer>
        </BarGroup>
      </ViewBars>
      <Description>
        Você pode conferir seu andamento a qualquer momento acessando o menu
      </Description>
      <BtnNavigate onPress={navigateToHome}>
        <BtnNavigateText>Vamos lá!</BtnNavigateText>
      </BtnNavigate>
    </Container>
  );
};

export default ResultProfile;
