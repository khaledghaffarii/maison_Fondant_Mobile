import { Pressable, StyleSheet, Image, View } from 'react-native';
import React, { useState } from 'react';
import { navigate } from '../hooks/NavigationHook';
import { icons } from '../utils/icons';
//import { CurrentUserService } from '../services/CurrentUserService';
import { apiAdress } from '../utils/constants';
import { svgs } from '../utils/svg';
import { Layout } from '../utils/device';
import { Platform } from 'react-native';
import { images } from './../../assets/images/index';
export default function CustomHeader(props: { withProfilePicture: boolean }) {
	const [userPicture, setUserPicture] = useState();
	// apiAdress.baseUrl +
	// 	CurrentUserService?.getInstance().getCurrentUser().picture
	return (
		<View
			style={{
				backgroundColor: 'white',

				alignItems: 'center',
				borderWidth: 0.3,
				borderColor: '#eee',
			}}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-around',
					width: Layout.window.width,
				}}>
				{props.withProfilePicture && (
					<Pressable
						onPress={() => {
							navigate('Profile');
						}}></Pressable>
				)}
				{icons.logo_maison_fondant_Home}
				{props.withProfilePicture && (
					<Pressable
						onPress={() => {
							navigate('Profile');
						}}>
						<Image
							source={images.profilePicture}
							style={{
								height: 55,
								width: 55,
								borderRadius: 52,
								borderWidth: 2,
								marginTop: 15,
								padding: 5,
								borderColor: '#ae5f2a',
							}}
						/>
					</Pressable>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
