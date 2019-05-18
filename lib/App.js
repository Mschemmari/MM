import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import SplashScreen from './containers/splash-screen';


export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isVisible: false }), 2000);
  }
  render() {
    return (
      <View style={styles.container}>

        <SplashScreen />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});