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
import { Products } from '../../../models/Products';
import { ProductService } from '../../../services/ProductServices';
import { images } from '../../../utils/images';
import { Layout } from './../../../utils/device/index';
import { icons } from './../../../utils/icons/index';
import { navigate } from '../../../hooks/NavigationHook';
import { ProductScreenProps } from '../../../utils/types';
type Props = {};
const initProducts: Products[] = [];
export default function Product(props: ProductScreenProps) {
	const [devices, setDevices] = useState(initProducts);
	const [searchIcon, setsearchIcon] = useState(true);
	useEffect(() => {
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
	}, []);
	useEffect(() => {
		ProductService.getInstance()
			.getAllProducts()
			.then((data) => {
				let _Products = [];
				for (let elem of data!) {
					_Products.push(new Products(elem));
				}
				setDevices(_Products);
			});
	}, []);

	return (
		<ScrollView style={styles.container}>
			<View
				style={{
					width: Layout.window.width * 0.95,
					alignItems: 'flex-end',
				}}>
				<TouchableOpacity
					onPress={() => {
						navigate('addProduct');
					}}>
					<View style={{ flexDirection: 'row', padding: 5 }}>
						{icons.addIcon}
						<Text style={{ color: '#ae5f2a' }}>Ajouter</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					borderWidth: 1,
					width: Layout.window.width * 0.9,
					alignSelf: 'center',
					padding: 12,
					borderRadius: 7,
					borderColor: '#9999',
					margin: 25,
					flexDirection: 'row',
				}}>
				{searchIcon ? (
					<View style={{ marginTop: 5, marginRight: 5 }}>{icons.search}</View>
				) : null}
				<TextInput
					style={{
						width: Layout.window.width,
					}}
					placeholder=' Chercher'
				/>
			</View>
			<SafeAreaView style={{ flex: 1 }}>
				<FlatList
					numColumns={1}
					data={devices}
					renderItem={({ item }) => (
						<TouchableOpacity style={{}} key={item.id} onPress={() => {}}>
							<View
								style={{
									flexDirection: 'row',
									margin: 10,
									borderWidth: 1,
									padding: 15,
									borderRadius: 10,
									overflow: 'scroll',
									backgroundColor: '#FFF',
									elevation: 9,
									borderColor: '#eee',
								}}>
								<View
									style={{
										flexDirection: 'column',
										width: Layout.window.width * 0.5,
									}}>
									<View
										style={{
											flexDirection: 'column',
											alignItems: 'flex-start',
											justifyContent: 'flex-start',
										}}>
										<Text
											style={{
												fontFamily: 'AllerBold',
												textAlign: 'center',
												fontSize: 17,
											}}>
											{item.name}
										</Text>
										<Text
											style={{
												fontFamily: 'AllerLight',
												textAlign: 'center',
												fontSize: 15,
												color: '#979797',
												marginTop: -10,
												marginBottom: 8,
											}}>
											{item.category?.name}
										</Text>
										<Text
											style={{
												fontFamily: 'AllerBold',
												textAlign: 'center',
												fontSize: 14,
											}}>
											{item.quantity} Piéce
										</Text>
										<Text
											style={{
												fontFamily: 'AllerBold',
												textAlign: 'center',
												fontSize: 14,
												color: '#5ba6e4',
											}}>
											{item.price} DT/piéce
										</Text>
									</View>
								</View>
								{item.image ? (
									<View
										style={{
											width: Layout.window.width * 0.01,
										}}>
										<Image
											source={{ uri: item.image }}
											resizeMode='contain'
											style={{
												width: 160,
												height: 120,

												borderRadius: 10,
											}}
										/>
									</View>
								) : (
									<View
										style={{
											borderWidth: 1,
											borderColor: '#eee',
											borderRadius: 10,
										}}>
										<Image
											source={images.noPhoto}
											resizeMode='contain'
											style={{
												width: 150,
												height: 120,
												margin: 5,
											}}
										/>
									</View>
								)}
							</View>
						</TouchableOpacity>
					)}
				/>
			</SafeAreaView>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: Layout.window.width,
	},
});
