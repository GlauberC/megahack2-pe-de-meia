import React from 'react';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles/mainStyles';

import {
  Container,
  SearchBar,
  InputSearch,
  ViewMain,
  HeaderView,
  ViewTitle,
  Title,
  ViewCenter,
  TextMoney,
  ViewBalance,
  TextGain,
  TextLost,
  ViewInfo,
  TextInfo,
  InfoEm,
} from './styles';

const Home = () => {
  return (
    <Container>
      <SearchBar>
        <Icons name="search" size={22} color={colors.textLightDark} />
        <InputSearch />
        <Icons name="tune" size={22} color={colors.barContainer} />
      </SearchBar>
      <ViewMain>
        <HeaderView>
          <ViewTitle>
            <Title>Minhas finanças</Title>
          </ViewTitle>
          <Icons name="short-text" size={28} color={colors.textLightDark} />
        </HeaderView>
        <ViewCenter>
          <TextMoney>R$ 4.687,00</TextMoney>
          <ViewBalance>
            <TextGain>R$ 150,00</TextGain>
            <TextLost>R$ 50,00</TextLost>
          </ViewBalance>
        </ViewCenter>
      </ViewMain>

      <ViewInfo>
        <TextInfo>
          Você <InfoEm>economizou</InfoEm> R$100,00 este mês
        </TextInfo>
      </ViewInfo>
    </Container>
  );
};

export default Home;
