import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../styles/mainStyles';

import imageMeme01 from '../../assets/images/meme01.png';
import imageMeme02 from '../../assets/images/meme02.png';
import imageMeme03 from '../../assets/images/meme06.png';
import imageMeme04 from '../../assets/images/meme04.png';
import imageMeme05 from '../../assets/images/hiddenmeme01.png';
import imageMeme06 from '../../assets/images/hiddenmeme02.png';
import imageMeme07 from '../../assets/images/hiddenmeme03.png';
import imageMeme08 from '../../assets/images/hiddenmeme04.png';
import imageMeme09 from '../../assets/images/hiddenmeme05.png';

import {
  Container,
  TitleView,
  Title,
  ViewRowMeme,
  ImageMeme,
  ViewNav,
  NavDots,
  BtnArrow,
} from './styles';

const Achievements = () => {
  return (
    <Container>
      <TitleView>
        <Title>Conquistas</Title>
      </TitleView>
      <ViewRowMeme>
        <ImageMeme source={imageMeme01} />
        <ImageMeme source={imageMeme02} />
        <ImageMeme source={imageMeme03} />
      </ViewRowMeme>
      <ViewRowMeme>
        <ImageMeme source={imageMeme04} />
        <ImageMeme source={imageMeme05} />
        <ImageMeme source={imageMeme06} />
      </ViewRowMeme>
      <ViewRowMeme>
        <ImageMeme source={imageMeme07} />
        <ImageMeme source={imageMeme08} />
        <ImageMeme source={imageMeme09} />
      </ViewRowMeme>
      <ViewNav>
        <BtnArrow>
          <Icons
            name="keyboard-arrow-left"
            size={32}
            color={colors.textLight}
          />
        </BtnArrow>
        <NavDots active="true" />
        <NavDots />
        <NavDots />
        <BtnArrow>
          <Icons
            name="keyboard-arrow-right"
            size={32}
            color={colors.textLight}
          />
        </BtnArrow>
      </ViewNav>
    </Container>
  );
};

export default Achievements;
