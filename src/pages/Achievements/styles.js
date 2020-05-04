import styled from 'styled-components/native';
import {colors} from '../../styles/mainStyles';

export const Container = styled.View`
  flex: 1;
  background: ${colors.backgroundLight};
`;
export const TitleView = styled.View`
  background: ${colors.blockDark};
  align-self: flex-start;
  margin-top: 30px;
  padding: 3px 15px 3px 30px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 40px;
`;
export const Title = styled.Text`
  color: ${colors.textLight};
`;
export const ViewRowMeme = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const ImageMeme = styled.Image`
  width: 64px;
  height: 64px;
`;
export const ViewNav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;
export const NavDots = styled.View`
  width: 8px;
  height: 8px;
  background: ${(props) =>
    props.active === 'true' ? colors.blockDark : colors.blockLight};
  margin: 0 10px;
  border-radius: 32px;
`;
export const BtnArrow = styled.TouchableOpacity``;
