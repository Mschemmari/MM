import React, { PureComponent } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './containers/splash-screen';


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
        duration: 2000,
      }
    ).start();
    setTimeout(() => this.setState({ isVisible: false }), 3000);
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={styles.container}>
        {this.state.isVisible
          ? <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              opacity: fadeAnim,         // Bind opacity to animated value
            }}
          >
            <SplashScreen />
          </Animated.View>
          : <Text>Hello</Text>
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