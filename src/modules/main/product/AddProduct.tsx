import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	Image,
	ScrollView,
	SafeAreaView,
	LogBox,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CustomButton from '../../../components/CustomButton';
import { Products } from '../../../models/Products';
import { ProductService } from '../../../services/ProductServices';
import { images } from '../../../utils/images';
import { AddProductScreenProps } from '../../../utils/types';
import { Layout } from './../../../utils/device/index';
import { icons } from './../../../utils/icons/index';

type Props = {};
const initProducts: Products[] = [];
export default function AddProduct(props: AddProductScreenProps) {
	return (
		<ScrollView
			contentContainerStyle={styles.contentContainer}
			style={styles.container}>
			<TouchableOpacity
				onPress={() => {
					//navigate('addProduct');
				}}>
				<View
					style={{
						margin: 10,
						borderWidth: 1,
						padding: 15,
						borderRadius: 10,
						overflow: 'scroll',
						backgroundColor: '#FFF',
						elevation: 4,
						borderColor: '#eee',
						width: Layout.window.width * 0.3,
						alignItems: 'center',
						alignSelf: 'center',
						height: Layout.window.height * 0.1,
					}}>
					<View style={{}}>
						<Text> {icons.download} </Text>
					</View>
				</View>
			</TouchableOpacity>
			<View style={styles.textInputContainer}>
				<View
					style={styles.TextField}
					onTouchStart={() => {
						//emiter.emit('app:dropDownOpen', false);
					}}>
					<TextInput
						onPressIn={() => {}}
						style={styles.textInput}
						secureTextEntry={false}
						placeholder='Nom du Produit'
						onChangeText={(text: string) => {}}
					/>
				</View>
			</View>
			<View
				style={{
					marginTop: 70,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-evenly',
				}}
				onTouchStart={() => {
					//emiter.emit('app:dropDownOpen', false);
				}}>
				<View style={styles.TextField}>
					<TextInput
						onPressIn={() => {
							//setErrorPanneDetails(false);
						}}
						style={[
							styles.textInput,
							{
								height: Layout.window.height * 0.15,
								textAlignVertical: 'top',

								borderWidth: 1,
							},
							{ marginTop: -70 },
						]}
						secureTextEntry={false}
						placeholder='Détails du produit'
						onChangeText={(text: string) => {
							//setPanneDetails(text);
						}}
					/>
				</View>
			</View>
			<View style={styles.textInputContainer}>
				<View
					style={styles.TextField}
					onTouchStart={() => {
						//emiter.emit('app:dropDownOpen', false);
					}}>
					<TextInput
						onPressIn={() => {}}
						style={styles.textInput}
						secureTextEntry={false}
						placeholder='Catégorie'
						onChangeText={(text: string) => {}}
					/>
				</View>
			</View>
			<View style={styles.textInputContainer}>
				<View
					style={styles.TextField}
					onTouchStart={() => {
						//emiter.emit('app:dropDownOpen', false);
					}}>
					<TextInput
						onPressIn={() => {}}
						style={styles.textInput}
						secureTextEntry={false}
						placeholder='Prix DT'
						onChangeText={(text: string) => {}}
						keyboardType='numeric'
					/>
				</View>
				<View
					style={styles.TextField}
					onTouchStart={() => {
						//emiter.emit('app:dropDownOpen', false);
					}}>
					<TextInput
						onPressIn={() => {}}
						style={styles.textInput}
						secureTextEntry={false}
						placeholder='Quantité / Piéce'
						onChangeText={(text: string) => {}}
						keyboardType='numeric'
					/>
				</View>
			</View>
			<CustomButton
				borderColor='#eee'
				widthPerDevice={0.4}
				color={'#ae5f5e'}
				name={'Valider'}
				fontColor={'white'}
				onPress={() => {}}
				borderRadius={12}
			/>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: Layout.window.height,
		width: Layout.window.width,
	},
	textInputContainer: {
		marginTop: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	TextField: {
		backgroundColor: 'white',
		alignSelf: 'center',
		flex: 1,
		padding: 10,
	},
	contentContainer: {
		justifyContent: 'center',
		alignItems: 'center',

		paddingBottom: 50,
	},
	textInput: {
		fontFamily: 'AllerLight',
		textAlignVertical: 'center',
		borderWidth: 1,
		borderColor: '#9999',
		padding: 10,
		borderRadius: 10,
		height: 50,
	},
});
