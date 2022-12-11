import {
	StyleSheet,
	Image,
	View,
	Text,
	TouchableOpacity,
	ScrollView,
	DeviceEventEmitter,
	Alert,
	TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { images } from '../../utils/images';
import { icons } from '../../utils/icons';
import ProfileItem from './components/ProfileItem';
import { Layout } from '../../utils/device';

import { MenuScreenProps } from '../../utils/types';

import CustomButton from '../../components/CustomButton';

export default function ProfileMenu({ navigation, route }: MenuScreenProps) {
	const [user, setUser] = useState();
	// CurrentUserService.getInstance().getCurrentUser()
	// DeviceEventEmitter.addListener("app:userUpdated", (newUser: User) => {
	//   setUser(newUser);
	//   setUserPicture(newUser.picture);
	// });

	// const [userPicture, setUserPicture] = useState(user.picture);
	const [inputVisiblePassword, setInputVisiblePassword] = useState(false);
	const [modalVisible, setModalVisibility] = useState(false);

	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorOldPassword, setErrorOldPassword] = useState(false);
	const [errorNewPassword, setErrorNewPassword] = useState(false);
	const [errorConfirmPassword, setErrorConfirmPassword] = useState(false);

	const [seeOldPassword, setSeeOldPassword] = useState(false);
	const [seeNewPassword, setSeeNewPassword] = useState(false);
	const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
	const [lang, setLang] = useState('');
	// useEffect(() => {
	//   setLang(i18n.language);
	// }, []);
	const verifyPassword = (password: string) => {
		if (password.length < 6) {
			return false;
		} else {
			return true;
		}
	};
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<View style={styles.profileCard}>
					<TouchableOpacity
						onPress={() => {
							//navigation.navigate('Me');
						}}>
						<View style={{ flexDirection: 'column', alignSelf: 'center' }}>
							<View style={styles.profilePicture}>
								<Image
									source={images.profilePictureFemale}
									style={styles.picture}
								/>
							</View>
							<View style={styles.row}>
								{/* {user.fname == '' && user.lname == '' ? (
									<Text style={styles.mainText}>{`${
										user.email.split('@')[0]
									}`}</Text>
								) : (
									<Text style={styles.mainText}>
										{`${user.fname}  ${user.lname}`}
									</Text>
								)} */}
								<Text style={styles.mainText}>khaled ghaffari</Text>
								<Text style={{ marginTop: 5 }}> {icons.edit2}</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={[styles.settingCard, { marginTop: 15, flexDirection: 'row' }]}>
				<Image
					source={images.locationLanguage}
					style={{ width: 35, height: 35 }}
				/>
				<ProfileItem
					mainText={'LocationLanguage'}
					subText={'EditLocationLanguage'}
					onPress={() => {
						//	navigation.navigate('Location');
					}}
				/>
			</View>
			<View
				style={[styles.settingCard, { marginTop: 15, flexDirection: 'row' }]}>
				<Image
					source={images.ChangePassword}
					style={{ width: 35, height: 35 }}
				/>
				<ProfileItem
					mainText={'Change Password'}
					subText={'You can change your Password'}
					onPress={() => setInputVisiblePassword(!inputVisiblePassword)}
				/>
			</View>

			{inputVisiblePassword && (
				<>
					<View style={[styles.sendMessageContainer, { alignSelf: 'center' }]}>
						<View style={styles.TextField}>
							<Text style={styles.inputHeader}>
								{'old password'.toString()}
							</Text>
							<TextInput
								onPressIn={() => {
									setErrorOldPassword(false);
								}}
								style={[
									styles.textInput,
									{
										height: 50,
										borderWidth: 1,
										borderColor: errorOldPassword ? '#ff0000' : '#fff',
									},
								]}
								secureTextEntry={!seeOldPassword}
								value={oldPassword}
								onChangeText={(text: string) => {
									setOldPassword(text);
								}}
							/>
							<TouchableOpacity
								style={styles.eye}
								onPress={() => {
									setSeeOldPassword(!seeOldPassword);
								}}>
								<View>{seeOldPassword ? icons.eyeoff : icons.eye}</View>
							</TouchableOpacity>
							{errorOldPassword && (
								<>
									<Text
										style={{
											marginTop: 7,
											fontFamily: 'AllerLight',
											color: '#ff0000',
										}}>
										{'Wrong password'.toString()}
									</Text>
									<Text
										style={{
											marginTop: 7,
											fontFamily: 'AllerLight',
											color: 'blue',
											textDecorationLine: 'underline',
											fontSize: 11,
										}}>
										{'did you forget your password ?'.toString()}
									</Text>
								</>
							)}
						</View>
					</View>
					<View style={[styles.sendMessageContainer, { alignSelf: 'center' }]}>
						<View style={styles.TextField}>
							<Text style={styles.inputHeader}>
								{'New password'.toString()}
							</Text>
							<TextInput
								onPressIn={() => {
									setErrorNewPassword(false);
								}}
								style={[
									styles.textInput,
									{
										height: 50,
									},
								]}
								secureTextEntry={!seeNewPassword}
								value={newPassword}
								onChangeText={async (text: string) => {
									setNewPassword(text);
								}}
							/>
							<TouchableOpacity
								style={styles.eye}
								onPress={() => {
									setSeeNewPassword(!seeNewPassword);
								}}>
								<View>{seeNewPassword ? icons.eyeoff : icons.eye}</View>
							</TouchableOpacity>
							{errorNewPassword && (
								<Text
									style={{
										marginTop: 7,
										fontFamily: 'AllerLight',
										color: '#ff0000',
									}}>
									{'Password should contain at least 6 characters'.toString()}
								</Text>
							)}
						</View>
					</View>
					<View style={[styles.sendMessageContainer, { alignSelf: 'center' }]}>
						<View style={styles.TextField}>
							<Text style={styles.inputHeader}>
								{'Confirm new password'.toString()}
							</Text>
							<TextInput
								onPressIn={() => {
									setErrorConfirmPassword(false);
								}}
								style={[
									styles.textInput,
									{
										height: 50,
									},
								]}
								secureTextEntry={!seeConfirmPassword}
								value={confirmPassword}
								onChangeText={(text: string) => {
									setConfirmPassword(text);
								}}
							/>
							<TouchableOpacity
								style={styles.eye}
								onPress={() => {
									setSeeConfirmPassword(!seeConfirmPassword);
								}}>
								<View>{seeConfirmPassword ? icons.eyeoff : icons.eye}</View>
							</TouchableOpacity>
							{errorConfirmPassword && (
								<Text
									style={{
										marginTop: 7,
										fontFamily: 'AllerLight',
										color: '#ff0000',
									}}>
									{"Passwords don't match".toString()}
								</Text>
							)}
							<View style={{ marginTop: 34, marginBottom: 34 }}>
								<CustomButton
									color='#35A0EE'
									fontColor='#fff'
									name={'Save'}
									onPress={async () => {
										// if (verifyPassword(newPassword)) {
										//   if (confirmPassword === newPassword) {
										//     const userTestAuth =
										//       await AuthService.getInstance().loginWithEmailAndPassword(
										//         CurrentUserService?.getInstance().getCurrentUser()
										//           .email,
										//         oldPassword
										//       );
										//     if (new User(userTestAuth).token) {
										//       const user = new User(userTestAuth);
										//       user.password = newPassword;
										//       UserService.getInstance().updateUserPassword(user);
										//       Alert.alert("", t("Password changed succefully"));
										//       setInputVisiblePassword(false);
										//     } else {
										//       setErrorOldPassword(true);
										//     }
										//   } else {
										//     setErrorConfirmPassword(true);
										//   }
										// } else {
										//   setErrorNewPassword(true);
										// }
									}}
								/>
							</View>
						</View>
					</View>
				</>
			)}

			<View style={styles.settingCard}>
				<View style={{ flexDirection: 'row' }}>
					<Image
						source={images.HelpSupport}
						style={{ width: 35, height: 35 }}
					/>

					<ProfileItem
						mainText={'HelpSupport'}
						onPress={() => {
							//navigation.navigate('HelpSupport');
						}}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Image source={images.aboutAs} style={{ width: 35, height: 35 }} />
					<ProfileItem
						mainText={'AboutApp'}
						onPress={() => {
							//navigation.navigate('AboutApp');
						}}
					/>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Image source={images.logout} style={{ width: 35, height: 35 }} />
					<ProfileItem
						mainText={'Logout'.toString()}
						onPress={() => {
							// handleLogout(() => {
							//   StorageService.getInstance().storeValue("token", "false");
							//   CurrentUserService.getInstance().clear();
							//   navigation.reset({
							//     index: 0,
							//     routes: [{ name: "Auth" }],
							//   });
							// });
						}}
					/>
				</View>
			</View>
			<View style={{ height: 25 }} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flex: 0.2,
		backgroundColor: '#fff',
	},
	profileCard: {
		paddingVertical: 5,
		marginTop: 15,
		backgroundColor: '#fff',
		width: Layout.window.width * 0.95,
		alignSelf: 'center',
		borderRadius: 5,
		shadowColor: '#000',
		// shadowOffset: {
		// 	width: 0,
		// 	height: 8,
		// },
		// shadowOpacity: 0.44,
		// shadowRadius: 10.32,

		// elevation: 16,
	},
	headerBackground: {
		flex: 1,
	},
	profilePicture: {
		height: Layout.window.width * 0.155,
		width: Layout.window.width,

		alignItems: 'center',
	},
	picture: {
		height: Layout.window.width * 0.18,
		width: Layout.window.width * 0.18,
		borderRadius: 60,

		borderColor: '#35A0EE',
		borderWidth: 2,
	},
	settingCard: {
		flex: 0.6,
		width: Layout.window.width * 0.95,
		backgroundColor: 'white',
		alignSelf: 'center',
		marginTop: 7.5,
		borderRadius: 5,
	},
	row: {
		flexDirection: 'row',

		alignSelf: 'center',
		margin: 15,
	},
	col: {
		flexDirection: 'column',
	},
	mainText: {
		fontFamily: 'AllerLight',
		textAlign: 'center',
		color: '#35A0EE',
		fontSize: 16,

		marginHorizontal: 15,
	},
	subText: {
		fontFamily: 'AllerLight',
		fontSize: 14,
		color: '#ddd',
		marginHorizontal: 5,
	},
	arrow: {
		color: '#35A0EE',
	},
	sendMessageContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		alignContent: 'space-between',
		padding: 5,
		backgroundColor: '#fff',
		width: Layout.window.width * 0.95,
		borderBottomEndRadius: 7,
		borderBottomStartRadius: 7,
	},
	TextField: {
		backgroundColor: '#fff',
		alignSelf: 'center',
		marginLeft: 50,
		flex: 0.85,
		padding: 5,
	},
	textInput: {
		fontFamily: 'AllerLight',
		textAlign: 'left',
		textAlignVertical: 'center',
		backgroundColor: '#eee',
		padding: 15,
		borderRadius: 10,
	},
	sendIcon: {
		flex: 0.3,
		position: 'absolute',
		right: 12,
	},
	inputHeader: {
		marginTop: 15,
		textAlign: 'justify',
		paddingHorizontal: 5,
		paddingVertical: 5,
	},
	eye: {
		position: 'absolute',
		right: 8,
		top: 47,
		height: 50,
		width: 60,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
});
