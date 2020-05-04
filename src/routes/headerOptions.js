import * as React from 'react';

import Icons from 'react-native-vector-icons/MaterialIcons';

import imgLogo from '../assets/images/logo-branca.png';
import imgProfile from '../assets/images/profile-image.png';
import {Logo, IconView, ImageProfile} from './styles';

import {colors} from '../styles/mainStyles';

export const headerOptions = {
  headerTitle: () => <Logo source={imgLogo} />,
  headerRight: () => (
    <IconView>
      <ImageProfile source={imgProfile} />
    </IconView>
  ),
  headerLeft: () => (
    <IconView>
      <Icons name="menu" size={25} color={colors.textLight} />
    </IconView>
  ),
  headerStyle: {
    backgroundColor: colors.backgroundDark,
  },
  headerTitleAlign: 'center',
};
