import React, { useEffect } from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions, LogBox } from 'react-native';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 150;

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTijjQtXW6pO6Xa__QuGqeVz5Qn_nqHKmKM8TKUbRqlE0znBzOpYXepKXHEswgAIkYCku0&usqp=CAU",
    "https://bridgestacks.com/wp-content/uploads/2020/09/mobile-app-development-banner.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLF5a3lQYI-SAS7cFUtzfWCXktyKVBmpD8c_9eM0-KQ_l8ym0PzveTc1WXCh2U_IOrrk&usqp=CAU"
];

const RenderPage = (image, index) => {
 
    return (
        <View key={index}>
            <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
        </View>
    );
}

const Banners = () => {
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])
    return (
        <View>
            <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageSize={BannerWidth}
                pageHieght={BannerHeight}
            >
                {images.map((image, index) => RenderPage(image, index))}
            </Carousel>
        </View>
    );

}
export default Banners;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});