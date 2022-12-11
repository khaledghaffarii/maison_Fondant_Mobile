import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from '../../../modules/main/Landing/LandingScreen';
import { MainStackParamList } from '../../../utils/types';
import {
	DeviceEventEmitter,
	Image,
	Platform,
	Pressable,
	View,
} from 'react-native';

import { apiAdress } from '../../../utils/constants';
import { navigate } from '../../../hooks/NavigationHook';
import React, { useState } from 'react';

// import { CurrentUserService } from '../../../services/CurrentUserService';
import { StatusBar } from 'react-native';

import { icons } from '../../../utils/icons';
import BackButton from '../../public/BackButtom';
import { Layout } from './../../../utils/device/index';
const Stack = createNativeStackNavigator<MainStackParamList>();

/**
 * The Main navigator :
 * Enable user to choose device and submit a fix request.
 */

export default function MainNavigator() {
	const [userPicture, setUserPicture] = useState();
	// apiAdress.baseUrl +
	// 	CurrentUserService?.getInstance().getCurrentUser().picture

	/**
	 * This event listner is when user change his profile picture.
	 * We change the top icon picture with the new set picture.
	 */
	// DeviceEventEmitter.addListener('app:userPictureChanged', (data: string) => {
	// 	setUserPicture(data);
	// });

	return (
		<>
			<StatusBar barStyle={'dark-content'} />

			<Stack.Navigator initialRouteName='Landing'>
				<Stack.Screen
					name='Landing'
					component={LandingScreen}
					options={{
						contentStyle: {
							backgroundColor: 'white',
						},
						headerShadowVisible: false,
						headerTitle: '',
						headerTitleStyle: { fontFamily: 'AllerBold' },
					}}
				/>
			</Stack.Navigator>
		</>
	);
}

const landingScreenOptions = {
	contentStyle: {
		backgroundColor: 'white',
	},
	headerTitle: 'TrustiT',
};
const deviceScreenOptions = {
	contentStyle: {
		backgroundColor: 'white',
	},
};
