import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Carousel from '../containers/carousel'
import SplashScreen from '../containers/splash-screen'



const AppNavigation = createBottomTabNavigator(
    {
        Carousel: {
            screen: Carousel,
            navigationOptions: () => ({
                title: 'Carousel',
            })
        },
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: () => ({
                title: 'Splash Screen',
            })
        },

    },
    {
        tabBarOptions: {
            activeTintColor: '#e91e63',
            style: {
                backgroundColor: '#000',
            },
        },
    }
);
const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;