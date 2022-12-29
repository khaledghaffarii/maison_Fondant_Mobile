import { Pressable, StyleSheet, Image, View, Text } from 'react-native';
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
				width: Layout.window.width,
				height: Layout.window.height * 0.1,
				borderWidth: 1,
				borderColor: '#eee',
				justifyContent: 'space-between',
			}}>
			<Text
				style={{
					textAlign: 'center',
					position: 'absolute',
					right: 0,
					left: 0,
					top: 0,
					marginTop: -22,
				}}>
				{icons.logo_maison_fondant_Home}
			</Text>
			<Pressable
				onPress={() => {
					navigate('Profile');
				}}>
				<Image
					source={images.profilePicture}
					style={{
						height: 45,
						width: 45,
						borderRadius: 52,
						borderWidth: 2,
						marginRight: 15,
						marginTop: 5,
						position: 'absolute',

						right: 0,

						padding: 5,
						borderColor: '#ae5f2a',
					}}
				/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({});
