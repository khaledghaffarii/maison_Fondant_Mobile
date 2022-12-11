import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ConfigStackParamList } from '../../utils/types';
//import ChooseCountryScreen from '../../modules/InitialConfiguration/ChooseCountry/ChooseCountryScreen';

import ChooseCountry from '../../modules/InitialConfiguration/ChooseCountry/ChooseCountry';
import WelcomeScreen from '../../modules/InitialConfiguration/Welcome/WelcomeScreen';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
//import { t } from 'i18next';
import { icons } from '../../utils/icons';
const Stack = createNativeStackNavigator<ConfigStackParamList>();

/**
 * This Navigator is for handeling language and country choice of user.
 * Contains two screens one for choosing and storing the country and one for language.
 */

export default function InitialConfigNavigator() {
	return (
		<>
			<View style={{ backgroundColor: '#fff' }}>
				<Text style={{ width: wp('100%'), textAlign: 'center' }}>
					{icons.logo_maison_fondant}
				</Text>
			</View>

			<Stack.Navigator initialRouteName='Welcome'>
				<Stack.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{
						headerShown: false,

						title: 'TitleWelcom'.toString(),
					}}
				/>
			</Stack.Navigator>
		</>
	);
}
