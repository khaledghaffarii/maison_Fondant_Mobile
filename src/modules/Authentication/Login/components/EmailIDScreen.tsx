import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import { Layout } from '../../../../utils/device';
import { icons } from '../../../../utils/icons';
// import { t } from 'i18next';
import CustomButton from '../../../../components/CustomButton';
import {
	EmailOrPhoneScreenProps,
	LoginScreenProps,
} from '../../../../utils/types';
// import { User } from '../../../../models/User';
// import { StorageService } from '../../../../services/StorageService';
// import { AuthService } from '../../../../services/AuthService';
// import { CurrentUserService } from './../../../../services/CurrentUserService';
// import {
// 	verifyEmail,
// 	verifyPassword,
// } from './../../../../utils/validators/validators';
// import i18n from '../../../../utils/translation/i18n.config';
// import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function EmailIDScreen({ navigation, route }: LoginScreenProps) {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);
	const animation = useRef<LottieView>(null);

	const [seePassword, setSeePassword] = useState(false);
	const [password, setPassword] = useState('');
	const [loginAlert, setLoginAlert] = useState(false);
	const scrollRef = useRef<ScrollView>(null);
	const [lang, setLang] = useState('');
	const [errorMessageServer, setErrorMessageServer] = useState('');
	// useEffect(() => {
	// 	setLang(i18n.language);
	// }, []);
	// const login = async (user: User) => {
	// 	const data = await AuthService.getInstance().loginWithEmailAndPassword(
	// 		user.email,
	// 		user.password
	// 	);
	// 	var userFromDb = new User(data);
	// 	if (user.picture) {
	// 		userFromDb.picture = user.picture;
	// 	}
	// 	if (userFromDb != undefined && userFromDb.token != undefined) {
	// 		CurrentUserService.getInstance().setCurrentUser(userFromDb);
	// 		setLoading(false);
	// 		await StorageService.getInstance().storeValue('isLoggedIn', 'true');
	// 		await StorageService.getInstance().storeValue('token', userFromDb.token);

	// 		navigation.reset({
	// 			index: 0,
	// 			routes: [{ name: 'Home' }],
	// 		});
	// 	} else {
	// 		if (lang == 'ar') {
	// 			setErrorMessageServer(data.message.messageAr);
	// 			showMessage({
	// 				message: JSON.stringify(data.message.messageAr),
	// 				type: 'danger',
	// 			});
	// 		}
	// 		if (lang == 'fr') {
	// 			setErrorMessageServer(data.message.messageFr);
	// 			showMessage({
	// 				message: JSON.stringify(data.message.messageFr),
	// 				type: 'danger',
	// 			});
	// 		}
	// 		if (lang == 'en') {
	// 			setErrorMessageServer(data.message.message);
	// 			showMessage({
	// 				message: JSON.stringify(data.message.message),
	// 				type: 'danger',
	// 			});
	// 		}
	// 		setLoading(false);
	// 		setLoginAlert(true);
	// 	}
	// };

	const [invalidEmail, setInvalidEmail] = useState(false);
	const [invalidPassword, setInvalidPassword] = useState(false);

	// const handleLoginButton = () => {
	// 	const user = User.empty();
	// 	user.email = email;
	// 	user.password = password;
	// 	if (!verifyEmail(email)) {
	// 		setInvalidEmail(true);
	// 		showMessage({
	// 			message: t('please validate your Email'),
	// 			type: 'danger',
	// 		});
	// 	}
	// 	if (!verifyPassword(password)) {
	// 		setInvalidPassword(true);
	// 		showMessage({
	// 			message: t('please validate your Password'),
	// 			type: 'danger',
	// 		});
	// 	}
	// 	if (!verifyPassword(password) && !verifyEmail(email)) {
	// 		setInvalidPassword(true);
	// 		setInvalidEmail(true);
	// 		showMessage({
	// 			message: t('please validate your Email and Password'),
	// 			type: 'danger',
	// 		});
	// 	} else if (verifyPassword(password) && verifyEmail(email)) {
	// 		setLoading(true);
	// 		setTimeout(() => {
	// 			login(user);
	// 		}, 1000);
	// 	}
	// };

	return (
		<ScrollView>
			{/* <FlashMessage /> */}
			<View style={{ marginTop: 35, backgroundColor: '#fff' }}>
				<View style={styles.textInputContainer}>
					<View style={styles.TextField}>
						<View style={{ alignContent: 'center', flexDirection: 'column' }}>
							{errorMessageServer ? (
								<Text
									style={{
										fontFamily: 'AllerLight',
										marginBottom: 10,
										color: 'red',
									}}>
									{errorMessageServer}
								</Text>
							) : null}
							{invalidEmail ? (
								<Text
									style={{
										fontFamily: 'AllerLight',
										marginBottom: 10,
										color: 'red',
									}}>
									{'please validate your Email'.toString()}
								</Text>
							) : null}
							<TextInput
								placeholder={'Email'.toString()}
								onPressIn={() => {
									setInvalidEmail(false);
									setErrorMessageServer('');
									// scrollRef.current?.scrollToEnd({
									// 	animated: true,
									// });
								}}
								style={[
									styles.textInput,
									{
										borderColor:
											errorMessageServer || invalidEmail ? 'red' : '#eee',
										textAlign: lang == 'ar' ? 'right' : 'left',
									},
								]}
								secureTextEntry={false}
								value={email}
								onTouchStart={() => {
									setInvalidEmail(false);
								}}
								onChangeText={(text: string) => {
									setEmail(text);
								}}
							/>
						</View>
					</View>
				</View>
				<View style={styles.textInputContainer}>
					<View style={styles.TextField}>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ alignContent: 'center', flexDirection: 'column' }}>
								{invalidPassword ? (
									<Text
										style={{
											fontFamily: 'AllerLight',
											marginBottom: 10,
											color: 'red',
										}}>
										{'please validate your Password'.toString()}
									</Text>
								) : null}
								<TextInput
									placeholder={'Password'.toString()}
									onPressIn={() => {
										setInvalidPassword(false);
										setErrorMessageServer('');
										// scrollRef.current?.scrollToEnd({
										// 	animated: true,
										// });
									}}
									style={[
										styles.textInput,
										{
											borderColor:
												errorMessageServer || invalidPassword ? 'red' : '#eee',
											textAlign: lang == 'ar' ? 'right' : 'left',
										},
									]}
									secureTextEntry={!seePassword}
									value={password}
									onChangeText={(text: string) => {
										setPassword(text);
									}}
								/>
							</View>

							<TouchableOpacity
								style={styles.eye}
								onPress={() => {
									setSeePassword(!seePassword);
								}}>
								<View>{!seePassword ? icons.eyeoff : icons.eye}</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>

				<View style={{ height: 20 }} />
				<View style={{ alignSelf: 'flex-start', margin: 40 }}>
					{loading ? (
						<CustomButton
							widthPerDevice={0.4}
							borderRadius={20}
							color='#35A0EE'
							fontColor='#fff'
							name=''
							justifyContent='center'
							component={
								<LottieView
									ref={animation}
									loop={true}
									autoPlay
									style={{
										width: 40,
										height: 40,
									}}
									source={require('../../../../../assets/splash/splash.json')}
								/>
							}
							onPress={() => {
								//handleLoginButton();
							}}
						/>
					) : (
						<CustomButton
							widthPerDevice={0.4}
							color='#ae5f5e'
							fontColor='#fff'
							borderRadius={20}
							name={'Login'.toString()}
							onPress={async () => {
								//handleLoginButton();
								navigation.navigate('App');
							}}
						/>
					)}
					<TouchableOpacity
						onPress={() => {
							navigation.navigate('ForgetPassword');
						}}>
						<Text
							style={{
								fontFamily: 'AllerBold',
								color: '#ae5f5e',
								marginVertical: 15,
								alignSelf: 'center',
							}}>
							{'ForgotPassword'.toString()}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			{/* <View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					alignSelf: 'center',
				}}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Register');
					}}>
					<Text
						style={{
							fontFamily: 'AllerBold',
							color: '#1B74E4',
							fontSize: 17,
						}}>
						{'CreateNewAccount'.toString()}
					</Text>
				</TouchableOpacity>
			</View> */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	TextField: {
		backgroundColor: 'white',
		alignSelf: 'center',
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	textInput: {
		fontFamily: 'AllerLight',
		textAlignVertical: 'center',
		textAlign: 'left',
		borderWidth: 1,
		borderColor: '#fff',
		padding: 10,
		borderRadius: 15,
		height: 50,
		width: Layout.window.width * 0.85,
	},
	inputTitle: {
		fontFamily: 'AllerLight',
		marginBottom: 10,
	},
	eye: {
		// height: 10,
		// width: 70,
		right: 10,
		top: 15,
		position: 'absolute',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	textInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	eyeAr: {
		position: 'absolute',
		left: 0,
		top: -15,
		height: 80,
		width: 70,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
});
