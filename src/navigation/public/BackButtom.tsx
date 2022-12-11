import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { icons } from '../../utils/icons';

export default function BackButton(props: { onPress: Function }) {
	return (
		<TouchableOpacity
			style={{ marginTop: 25 }}
			onPress={() => {
				props.onPress();
			}}>
			{icons.arrowLeft2}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
