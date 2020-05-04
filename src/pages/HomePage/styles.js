import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.backgroundDark};
  padding: 10px;
`;
export const SearchBar = styled.View`
  flex-direction: row;
  background: ${colors.blockLight};
  align-items: center;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
`;
export const InputSearch = styled.TextInput`
  flex: 1;
`;
export const ViewMain = styled.View`
  background: ${colors.blockLight};
  margin-top: 40px;
  border-radius: 20px;
  padding: 20px;
`;
export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ViewTitle = styled.View`
  background: ${colors.textDark};
  justify-content: center;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
`;
export const Title = styled.Text`
  color: ${colors.textLight};
  font-size: 12px;
`;
export const ViewCenter = styled.View`
  margin: 40px;
`;
export const TextMoney = styled.Text`
  margin: 20px 0;
  font-size: 28px;
  text-align: center;
  color: ${colors.textDark};
  font-weight: bold;
`;
export const ViewBalance = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
export const TextGain = styled.Text`
  font-size: 10px;
  color: ${colors.textGain};
`;
export const TextLost = styled(TextGain)`
  color: ${colors.textLost};
`;
export const ViewInfo = styled.View`
  margin-top: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: ${colors.textLight};
  border-radius: 20px;
`;
export const TextInfo = styled.Text`
  color: ${colors.textDark};
`;
export const InfoEm = styled.Text`
  color: ${colors.textGain};
`;
