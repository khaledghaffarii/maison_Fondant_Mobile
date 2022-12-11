import React, { useState } from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from './Splash';

import useCachedResources from './src/hooks/useCachedRessources';
import RootNavigator from './src/navigation/RootNavigator';
// import './src/utils/translation/i18n.config';
import { RootStackParamList } from './src/utils/types';
LogBox.ignoreLogs(['Non-serializable']);

/**
 * The root component:
 * Renders a splash screen while loading cached ressources and stored values
 */
export default function App() {
	/**
	 * These custom hooks are used to load ressource such as fonts,
	 * and to register the app for the push notification and get the token.
	 */
	useCachedResources();

	const [initialRoute, setInitialRoute] =
		useState<keyof RootStackParamList>('InitialConfig');
	/**
	 * When splash animation is finished "isLoaded" state is set to true and
	 * exposes a string (keyof RootStackParamList) to be set as the initial route
	 * which is determined by checking locally stored values (login credentials, country and language) .
	 */
	const [isLoaded, setIsLoaded] = useState(false);

	const handleOnFinishAnimation = () => () => {
		setIsLoaded(true);
	};
	const handleSetInitialRoute = () => (route: keyof RootStackParamList) => {
		setInitialRoute(route);
	};
	return !isLoaded ? (
		<SplashScreen
			onAnimationFinished={handleOnFinishAnimation()}
			setInitialRoute={handleSetInitialRoute()}
		/>
	) : (
		<RootNavigator initialRouteName='InitialConfig' />
	);
}
