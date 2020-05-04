import styled from 'styled-components/native';

import {colors} from '../../styles/mainStyles';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${colors.backgroundDark};
`;
export const ViewResult = styled.View`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const ViewImageResult = styled.View``;
export const ImageResult = styled.Image`
  width: 250px;
  height: 230px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${colors.textLight};
`;
export const TextScore = styled(Title)`
  background: ${colors.blockLight};
  color: ${colors.textDark};
  padding: 0px 10px;
  margin-top: 3px;
  border-radius: 24px;
`;
export const TextCondition = styled.Text`
  margin: 30px;
  color: ${colors.textLight};
  font-size: 16px;
`;
export const Description = styled.Text`
  padding: 0px 20px;
  font-size: 16px;
  text-align: center;
  color: ${colors.textLight};
`;
export const EmDescription = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const ViewBars = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
export const BarGroup = styled.View`
  margin-bottom: 20px;
`;
export const Label = styled.Text`
  color: ${colors.textLight};
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
  width: ${(props) => `${props.progressPercent}`};
  height: 30px;
  background: ${(props) => props.color};
  border-radius: 20px;
`;
export const BtnNavigate = styled.TouchableOpacity`
  width: 220px;
  height: 40px;
  margin: 30px 0;
  align-self: center;
  background: ${colors.blockLight};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
export const BtnNavigateText = styled.Text`
  color: ${colors.textDark};
`;
