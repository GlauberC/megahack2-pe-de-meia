import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundDark};
  padding: 10px;
  justify-content: center;
`;
export const Form = styled.View``;
export const TextIntro = styled.Text`
  text-align: center;
  color: ${colors.textLight};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Input = styled.TextInput`
  background: ${colors.blockLight};
  height: 40px;
  margin: 10px 20px;
  padding: 5px 15px;
  border-radius: 20px;
`;
export const BtnForgetPassword = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
export const BtnForgetPasswordText = styled.Text`
  font-size: 12px;
  color: ${colors.textLightDark};
  margin-bottom: 30px;
`;
export const ViewBtns = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const BtnNavigate = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  background: ${(props) =>
    props.submit === 'true' ? colors.blockSubmit : colors.blockLight};
  border-radius: 20px;

  justify-content: center;
  align-items: center;
`;
export const BtnNavigateText = styled.Text`
  color: ${(props) =>
    props.submit === 'true' ? colors.textLight : colors.textDark};
`;
export const ViewDigital = styled.View`
  position: absolute;
  bottom: 40px;
  align-self: center;
`;
