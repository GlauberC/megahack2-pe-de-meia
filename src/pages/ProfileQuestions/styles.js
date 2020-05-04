import styled from 'styled-components/native';

import {colors} from '../../styles/mainStyles';

export const Container = styled.ScrollView`
  flex: 1;

  background: ${colors.backgroundDark};
  padding: 10px;
`;
export const TextQuetion = styled.Text`
  font-size: 20px;
  color: ${colors.textLight};
  margin-bottom: 30px;
  text-align: center;
`;
export const ViewOptions = styled.View``;
export const OptionContainer = styled.TouchableOpacity`
  background: ${colors.blockLight};
  min-height: 40px;
  margin: 20px 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;
export const OptionText = styled.Text`
  text-align: center;
  color: ${colors.textDark};
`;
export const ViewBar = styled.View``;
export const BarDescription = styled.Text`
  margin-top: 10px;
  color: ${colors.textLightDark};
  text-align: center;
`;
export const BarContainer = styled.View`
  width: 200px;
  background: ${colors.blockLight};
  height: 30px;
  border-radius: 20px;
  margin-top: 5px;
  align-self: center;
`;
export const BarProgress = styled.View`
  width: ${(props) => `${props.questionPercent}%`};
  height: 30px;
  background: ${colors.blockBar};
  border-radius: 20px;
`;
export const BackButton = styled.TouchableOpacity`
  margin-top: 50px;
  width: 100px;
  height: 20px;
  align-self: center;
  background: ${colors.blockLight};
  justify-content: center;
  border-radius: 20px;
`;
export const BackButtonText = styled.Text`
  text-align: center;
  color: ${colors.textDark};
`;
