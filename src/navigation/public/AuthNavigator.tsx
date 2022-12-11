import { AuthTabParamList } from '../../utils/types';
//import { t } from 'i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import RegisterNavigator from './RegisterNavigator';
//import ForgetPassword from '../../modules/Authentication/Login/ForgetPassword';
import { StatusBar, View, Text } from 'react-native';
import EmailIDScreen from '../../modules/Authentication/Login/components/EmailIDScreen';
import React, { useEffect } from 'react';
import BackButton from './BackButtom';
import { icons } from '../../utils/icons';
//import { showMessage } from 'react-native-flash-message';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const StackLogin = createNativeStackNavigator<AuthTabParamList>();

/**
 * The AuthNavigator (Bottom Tabs navigator) contains two tabs for Login and Register screens.
 */

export default function AuthNavigator() {
	return (
		<>
			<StatusBar barStyle={'dark-content'} />
			<View style={{ backgroundColor: '#fff' }}>
				<Text style={{ width: wp('100%'), textAlign: 'center' }}>
					{icons.logo_maison_fondant}
				</Text>
			</View>
			<StackLogin.Navigator
				initialRouteName='Login'
				screenOptions={{
					headerShown: false,
				}}>
				<StackLogin.Screen
					name='Login'
					component={EmailIDScreen}
					options={({ navigation, route }) => {
						return {
							headerShown: true,
							title: '',
							headerShadowVisible: false,
							contentStyle: { backgroundColor: 'white' },
							headerLeft: () => (
								<BackButton
									onPress={() => {
										navigation.goBack();
									}}
								/>
							),
							headerTitleStyle: { fontSize: 38, fontFamily: 'AllerBold' },
						};
					}}
				/>
				{/* <StackLogin.Screen
					name='ForgetPassword'
					component={ForgetPassword}
					options={({ navigation, route }) => {
						return {
							headerShown: true,
							title: '',
							headerShadowVisible: false,
							contentStyle: { backgroundColor: 'white' },
							headerLeft: () => (
								<BackButton
									onPress={() => {
										navigation.goBack();
									}}
								/>
							),
							headerTitleStyle: { fontSize: 38, fontFamily: 'AllerBold' },
						};
					}}
				/> */}
			</StackLogin.Navigator>
		</>
	);
}
