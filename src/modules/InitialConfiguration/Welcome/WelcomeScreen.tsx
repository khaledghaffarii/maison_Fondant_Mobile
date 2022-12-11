import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Image,
	View,
	Text,
	ScrollView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import BottomNavigationIndicator from '../components/BottomNavigationIndicator';
import { images } from '../../../utils/images';
import { WelcomeScreenProps } from '../../../utils/types';
import CustomButton from '../../../components/CustomButton2';
// import i18n from '../../../utils/translation/i18n.config';
// import { StorageService } from '../../../services/StorageService';
import { Layout } from './../../../utils/device/index';
import { icons } from '../../../utils/icons';
// import { t } from 'i18next';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
type LanguageType = 'ar' | 'en' | 'fr';
const resolution = window.innerWidth;
const isMobile = resolution >= 480 && resolution <= 800;
const isTablet = resolution >= 768 && resolution <= 1024;
const isDesktop = !isMobile && !isTablet;

/**
 * This is the first screen that the user sees after the splash screens
 */

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
	const [activeLanguage, setActiveLanguage] = useState(false);
	const [activeLanguageArabe, setActiveLanguageArabe] = useState(false);
	const scrollRef = useRef<ScrollView>(null);
	// const setLanguage = async (lang: LanguageType) => {
	// 	await i18n.changeLanguage(lang);
	// 	setActiveLanguage(lang);
	// };

	// this useEffect (on componentDidMount) sets the language with the current i18n language
	// useEffect(() => {
	// 	setLanguage(i18n.language as LanguageType);
	// }, []);

	return (
		<ScrollView ref={scrollRef} style={styles.rootContainer}>
			<StatusBar barStyle={'dark-content'} />
			{/* <View style={styles.graphicContainer}>{icons.logo_maison_fondant}</View> */}
			<Text style={styles.headerText}>
				Cette application est dédiée à l'équipe Maison fondant
			</Text>

			<View style={styles.languagesContainer}>
				<View style={styles.row}>
					<Image source={images.ksa} style={styles.languageImage} />
					<CustomButton
						widthPerDevice={0.3}
						name='العربية'
						selected={activeLanguageArabe}
						onPress={() => {
							//	setLanguage('ar');
							scrollRef.current?.scrollToEnd({
								animated: true,
							});
							setActiveLanguageArabe(true);
							setActiveLanguage(false);
						}}
						borderRadius={25}
					/>
				</View>
				<View style={styles.row}>
					<Image source={images.fr} style={styles.languageImage} />
					<CustomButton
						name='Français'
						widthPerDevice={0.3}
						selected={activeLanguage}
						onPress={() => {
							//setLanguage('fr');
							scrollRef.current?.scrollToEnd({
								animated: true,
							});
							setActiveLanguage(true);
							setActiveLanguageArabe(false);
						}}
						borderRadius={25}
					/>
				</View>
			</View>

			<View style={styles.bottomNavigationContainer}>
				<BottomNavigationIndicator
					isLanguageSelected={
						activeLanguage || activeLanguageArabe ? true : false
					}
					index={0}
					onNext={() => {
						navigation.navigate('Auth');
					}}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		width: wp('100%'),
		height: hp('100%'),
		flex: 2,
		paddingHorizontal: 8,

		backgroundColor: 'white',
	},
	topBarContainer: {
		flex: 0.1,
		justifyContent: 'center',
	},
	graphicContainer: {
		alignItems: 'center',
		margin: 15,
	},
	messageContainer: {
		margin: 0,
		width: wp('90%'),
		height: hp('35%'),
	},
	bottomNavigationContainer: {
		height: hp('35%'),

		alignSelf: 'center',
	},
	headerText: {
		fontSize: 20,
		margin: 35,
		fontFamily: 'AllerLight',
		textAlign: 'center',
		color: '#ae5f2a',
	},
	row: {
		flexDirection: 'row',
		alignSelf: 'center',
		alignItems: 'center',
	},
	languagesContainer: {
		flexDirection: 'row',
		alignSelf: 'center',
		margin: 17,
	},
	messageText: {
		fontFamily: 'AllerLight',
		marginHorizontal: 25,
		margin: 7,
	},
	languageImage: {
		aspectRatio: 1,
		width: wp('9%'),
		margin: 10,
		alignSelf: 'center',
		borderRadius: wp('9%') / 2,
	},
});
