import { StyleSheet, View, Image } from 'react-native';
import React, { useRef } from 'react';
import LottieView from 'lottie-react-native';
import { getStoredValues } from './src/utils/helpers';
import { images } from './src/utils/images';
import { Layout } from './src/utils/device';

/**
 * The splash screen uses the Lottie Component.
 * The animation is from a lottie.json file
 * Find more Lottie files at https://lottiefiles.com/featured
 */

export default function SplashScreen(props: {
	onAnimationFinished: Function;
	setInitialRoute: Function;
}) {
	const animation = useRef<LottieView>(null);

	return (
		<>
			<View style={styles.animationContainer}>
				{/* <Image
					source={images.splashImage}
					resizeMode='contain'
					style={{ alignSelf: 'center', flex: 1, width: 400, height: 400 }}
				/> */}
				<LottieView
					ref={animation}
					loop={false}
					autoPlay
					style={{
						width: 150,
						height: 150,
						backgroundColor: '#fff',
					}}
					source={require('./assets/splash/splash5.json')}
					onAnimationFinish={() => {
						props.onAnimationFinished();
					}}
					onLayout={() => {
						getStoredValues().then((route) => {
							props.setInitialRoute(route);
						});
					}}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	animationContainer: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
});
