import React, { PureComponent } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './containers/splash-screen';
import AppNavigation from './navigation/app'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start();
    setTimeout(() => this.setState({ isVisible: false }), 5000);
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
        {this.state.isVisible
          ? <Animated.View style={{ opacity: fadeAnim, }}>
            <SplashScreen />
          </Animated.View>
          : <AppNavigation />
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});