import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import { main } from './style';
import { images } from '../../theme/';

class SplashScreen extends PureComponent {
  render() {
    return (
      <View style={main.container}>
        <View style={main.logoContainer}>
          <Image style={main.logo} source={images.LOGO_MM} />
        </View>
      </View>
    )
  }
}

export default SplashScreen;
