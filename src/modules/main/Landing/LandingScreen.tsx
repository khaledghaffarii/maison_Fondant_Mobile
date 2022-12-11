import { StyleSheet, View, ScrollView } from 'react-native';
import React, { Fragment, useEffect } from 'react';
import { LandingScreenProps } from '../../../utils/types';
import CustomButton from '../../../components/CustomButton';
import BackgroundImage from './components/BackgroundImage';
import Slogans from './components/Slogans';
//import { t } from 'i18next';
//import { GlobalState } from '../../../utils/GlobalState';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import i18n from '../../../utils/translation/i18n.config';
export default function LandingScreen(props: LandingScreenProps) {
	// useEffect(() => {
	// 	GlobalState.fix = [];
	// }, []);

	return (
		<ScrollView>
			{/* <Fragment>
				<Slogans />
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'flex-start',
						marginHorizontal: 25,
						width: wp('100%'),
					}}>
					<CustomButton
						widthPerDevice={0.25}
						borderRadius={16}
						color='#35a0ee'
						name={'Fix'}
						borderColor='#35accc'
						fontColor='#eee'
						onPress={() => {
							//	props.navigation.navigate('Device');
						}}
					/>
					<CustomButton
						widthPerDevice={0.34}
						// widthPerDevice={i18n.language == 'ar' ? 0.4 : 0.34}
						borderRadius={16}
						color='#ffff'
						borderColor='#35accc'
						name={'Fixes'}
						fontColor='#35accc'
						onPress={() => {
							//	props.navigation.navigate('Fixes');
						}}
					/>
				</View>
				<BackgroundImage />
			</Fragment> */}
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
