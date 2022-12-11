import {
	Dimensions,
	ImageBackground,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import React from 'react';
import { images } from '../../../../utils/images';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function BackgroundImage() {
	return (
		<ImageBackground
			source={images.backgroung5}
			resizeMode='contain'
			style={styles.image}
		/>
	);
}

const styles = StyleSheet.create({
	image: {
		height: hp('25%'),
		width: Dimensions.get('window').width,
	},
});
