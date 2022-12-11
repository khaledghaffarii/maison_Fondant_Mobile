import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
	const [isLoadingComplete, setLoadingComplete] = useState(false);

	// Load any resources or data that we need prior to rendering the app
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();

				// Load fonts
				await Font.loadAsync({
					...FontAwesome.font,
					ubuntuMonospace: require('../../assets/fonts/UbuntuMono-Regular.ttf'),
					ubuntuMedium: require('../../assets/fonts/Ubuntu-Medium.ttf'),
					ubuntu: require('../../assets/fonts/Ubuntu-Light.ttf'),
					AllerBold: require('../../assets/fonts/Harmattan-Bold.ttf'),
					AllerLight: require('../../assets/fonts/Harmattan-Regular.ttf'),
				});
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				setLoadingComplete(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}
