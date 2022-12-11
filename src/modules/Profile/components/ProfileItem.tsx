import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
//import i18n from '../../../utils/translation/i18n.config';
import { icons } from '../../../utils/icons';
import { Layout } from './../../../utils/device/index';

export default function ProfileItem(props: {
	//icon: JSX.Element;
	mainText: string;
	subText?: string;
	onPress: Function;
}) {
	const [lang, setLang] = useState('');
	// useEffect(() => {
	// 	setLang(i18n.language);
	// }, []);
	const styles = StyleSheet.create({
		container: {
			marginVertical: 15,
		},
		row: {
			flexDirection: lang == 'ar' ? 'row-reverse' : 'row',
			marginLeft: 15,
			alignItems: 'center',
		},
		col: {
			flexDirection: 'column',
			marginLeft: 15,
			marginRight: 0,
		},
		mainText: {
			fontFamily: 'AllerLight',
			fontSize: 14,
		},
		subText: {
			fontFamily: 'AllerLight',
			fontSize: 12,
			color: 'gray',
		},
		iconContainer: {
			height: 40,
			width: 40,
			borderRadius: 50,
			backgroundColor: '#F3F2FB',
			justifyContent: 'center',
			alignItems: 'center',
		},
		arrow: {
			position: 'absolute',
			end: 15,
		},
	});
	return (
		<TouchableOpacity onPress={() => props.onPress()} style={styles.container}>
			<View style={styles.row}>
				{/* <View style={styles.iconContainer}>{props.icon}</View> */}

				<View style={styles.col}>
					<Text style={styles.mainText}>{props.mainText}</Text>
				</View>
			</View>
			<View
				style={{
					borderWidth: 1,
					borderColor: '#eee',
					width: Layout.window.width * 0.8,
					alignSelf: 'center',
					margin: 10,
					opacity: 0.4,
				}}></View>
		</TouchableOpacity>
	);
}
