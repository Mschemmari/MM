import React, { PureComponent } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

import SplashScreen from './containers/splash-screen';
import AppContainer from './navigation/app'

export default class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      isVisible: true,
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    };
  }
  store = Store(this.init);

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
      <View style={styles.wrapper}>
        {this.state.isVisible
          ?
          <Animated.View style={{ opacity: fadeAnim, }}>
            <SplashScreen />
          </Animated.View>
          :
          <Provider store={this.store}>
            <AppContainer />
          </Provider>

        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  }
});