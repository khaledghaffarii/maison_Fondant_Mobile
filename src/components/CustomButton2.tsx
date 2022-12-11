import { Text, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Layout } from '../utils/device';

type ButtonProps = {
	onPress: Function;
	name: string;
	component?: JSX.Element;
	widthPerDevice?: number;
	borderRadius?: number;
	justifyContent?:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| undefined;
	disabled?: boolean;
	selected?: boolean;
	gryColor?: boolean;
};

export default class CustomButton extends Component<ButtonProps> {
	render() {
		return (
			<TouchableOpacity
				disabled={this.props.disabled}
				onPress={() => this.props.onPress()}>
				<View
					style={{
						borderColor: '#ae5f2a',
						borderWidth: 1,
						paddingTop: 10,
						paddingBottom: 10,
						paddingLeft: 20,
						paddingRight: 20,
						marginTop: 5,
						marginBottom: 5,
						height: 50,
						marginRight: 8,
						borderRadius: this.props.borderRadius ?? 5,
						alignItems: 'center',
						alignSelf: 'center',
						width:
							this.props.widthPerDevice! == undefined
								? Layout.window.width * 0.6
								: Layout.window.width * this.props.widthPerDevice,
						backgroundColor: this.props.selected ? '#ae5f2e' : '#fff',
						flexDirection: 'row',
						justifyContent:
							this.props.justifyContent == undefined
								? 'center'
								: this.props.justifyContent,
					}}>
					{this.props.component && this.props.component}
					{this.props.component && <View style={{ width: 5 }} />}
					<Text
						style={{
							fontSize: 16,
							color: this.props.selected ? '#fff' : '#ae5f2a',
							fontFamily: 'AllerLight',
						}}>
						<View style={{ width: 5 }}></View>
						{this.props.name}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
