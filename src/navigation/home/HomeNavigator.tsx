import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainNavigator from './main/MainNavigator';
import { icons } from '../../utils/icons';
import { HomeTabParamList } from '../../utils/types';
import ProfileNavigator from './profile/ProfileNavigator';

import { Image, Pressable, StatusBar, View } from 'react-native';
// import { t } from 'i18next';
import { apiAdress } from '../../utils/constants';

import { navigate } from '../../hooks/NavigationHook';
import CustomHeader from '../../components/CustomHeader';
const Tab = createBottomTabNavigator<HomeTabParamList>();

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
						title: 'Home',
						tabBarActiveTintColor: '#ae5f2a',
						tabBarLabelStyle: { fontFamily: 'AllerLight', fontSize: 12 },
						tabBarIcon: ({ color }) => icons.home(color!),
						header: () => <CustomHeader withProfilePicture />,
					}}
				/>
				<Tab.Screen
					name='Profile'
					component={ProfileNavigator}
					options={{
						title: 'Profile',
						tabBarActiveTintColor: '#ae5f2a',
						tabBarLabelStyle: { fontFamily: 'AllerLight', fontSize: 12 },
						tabBarIcon: ({ color }) => icons.profile(color!),
						header: () => <CustomHeader withProfilePicture={false} />,
					}}
				/>
			</Tab.Navigator>
		</>
	);
}
