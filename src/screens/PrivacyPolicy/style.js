
import { Dimensions, Platform, StyleSheet, } from 'react-native';
import { OPEN_SANS_REGULAR, PROXIMA_NOVA_BOLD } from '../../components/Constants/Fonts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.04,
        paddingTop: height * 0.02,
        backgroundColor: 'white',
    },
    txt: {
        fontFamily:Platform.OS==='web'?'OPEN_SANS_REGULAR': OPEN_SANS_REGULAR,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        marginVertical: height * 0.02,
    },
    heading: {
        fontFamily:Platform.OS==='web'?'PROXIMA_NOVA_BOLD': PROXIMA_NOVA_BOLD,
        fontSize: 24,
        // marginTop: height * 0.01,
    },
});
