import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './main/MainNavigator';
import { icons } from '../../utils/icons';
import { HomeTabParamList } from '../../utils/types';
import ProfileNavigator from './profile/ProfileNavigator';
import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer';
import { Image, Pressable, StatusBar, View, Text } from 'react-native';
// import { t } from 'i18next';
import { apiAdress } from '../../utils/constants';

import { navigate } from '../../hooks/NavigationHook';
import CustomHeader from '../../components/CustomHeader';
import { Layout } from '../../utils/device';
import AppDrawer from '../components/Drawer';
import { images } from '../../../assets/images';
const Tab = createBottomTabNavigator<HomeTabParamList>();
const Drawer = createDrawerNavigator();
/**
 * This is the Home navigator (Bottom tabs navigator) :
 * Contains Main , Fixes , Messages and Profile tabs.
 * Each tab is also composed with another navigator.
 */

export default function HomeNavigator() {
	return (
		<>
			<Tab.Navigator initialRouteName='Main'>
				<Tab.Screen
					name='Main'
					component={MainNavigator}
					options={{
						headerShown: false,
						title: 'Home',
						tabBarActiveTintColor: '#ae5f2a',
						tabBarLabelStyle: { fontFamily: 'AllerLight', fontSize: 12 },
						headerShadowVisible: false,
						tabBarIcon: ({ color }) => icons.home(color!),
					}}
				/>
				<Tab.Screen
					name='Profile'
					component={ProfileNavigator}
					options={{
						title: 'Profile',
						headerShown: false,
						tabBarActiveTintColor: '#ae5f2a',
						tabBarLabelStyle: { fontFamily: 'AllerLight', fontSize: 12 },
						tabBarIcon: ({ color }) => icons.profile(color!),
						//header: () => <CustomHeader withProfilePicture={false} />,
					}}
				/>
			</Tab.Navigator>
		</>
	);
}
export function DrawerNav() {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerShown: true,
				title: '',
				drawerPosition: 'left',
				sceneContainerStyle: { backgroundColor: 'white' },
				drawerType: 'front',
				headerShadowVisible: true,
				drawerStyle: { width: Layout.window.width * 0.7 },
				// header: () => <CustomHeader withProfilePicture />,
				headerBackground: () => <CustomHeader withProfilePicture={false} />,
			}}
			drawerContent={(props) => <AppDrawer />}
			initialRouteName='Home'>
			<Drawer.Screen name='Home' component={HomeNavigator} />
		</Drawer.Navigator>
	);
}
