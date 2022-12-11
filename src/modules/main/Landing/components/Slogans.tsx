import { StyleSheet, Text, View } from 'react-native';
import React, { Fragment, useEffect, useState, useTransition } from 'react';
//import { t } from 'i18next';
//import i18n from './../../../../utils/translation/i18n.config';
export default function Slogans() {
	const [lang, setLang] = useState('');
	// useEffect(() => {
	// 	setLang(i18n.language);
	// }, []);
	return (
		<Fragment>
			<Text
				style={{
					marginTop: 35,
					marginBottom: 0,
					marginHorizontal: 25,
					fontFamily: 'AllerBold',
					letterSpacing: 1.5,
					fontSize: 38,
					lineHeight: 50,
					textAlign: lang == 'ar' ? 'right' : 'left',
				}}>
				{'WelcomeMessage'.toString()}!
			</Text>
			<View>
				<Text
					style={{
						marginBottom: 4,
						marginHorizontal: 25,
						fontFamily: 'AllerLight',
						fontSize: 18,
						textAlign: lang == 'ar' ? 'right' : 'left',
					}}>
					{'HomeSlogan1'.toString()}
				</Text>
				<Text
					style={{
						marginBottom: 4,
						marginHorizontal: 25,
						fontFamily: 'AllerLight',
						fontSize: 18,
						textAlign: lang == 'ar' ? 'right' : 'left',
					}}>
					{'HomeSlogan2'.toString()}
				</Text>
			</View>
		</Fragment>
	);
}

const styles = StyleSheet.create({});
