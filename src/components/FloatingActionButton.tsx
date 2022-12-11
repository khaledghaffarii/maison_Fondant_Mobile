import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';

const FloatingActionButton = (props: {
	onPress: Function;
	icon: JSX.Element;
	size?: number;
	color?: string;
}) => {
	return (
		<TouchableOpacity onPress={() => props.onPress()}>
			<View
				style={[
					styles.container,
					{
						width: props.size ?? 30,
					},
				]}>
				<Text style={{ color: '#fff', fontFamily: 'AllerLight', fontSize: 15 }}>
					Get started
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default FloatingActionButton;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		aspectRatio: 1,
		paddingHorizontal: 20,
		paddingVertical: 20,
	},
	title: {
		fontSize: 18,
		color: '#fff',
		fontWeight: 'bold',
	},
});
