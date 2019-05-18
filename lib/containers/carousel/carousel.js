import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';

import { main } from './style';
import { images } from '../../theme/';



class Carousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { uri: images.IMG_1, },
                { uri: images.IMG_2, },
            ],
        };
    }
    render() {

        return (
            <View style={main.wrapper}>
                <Swiper showsButtons={true}>
                    {this.state.items.map((item, i) => {
                        return (
                            <View style={main.slide} key={i}>
                                <Image resizeMode='cover' style={main.image} source={item.uri} />
                            </View>

                        );
                    })}

                </Swiper>
            </View>
        )
    }
}

export default Carousel;
