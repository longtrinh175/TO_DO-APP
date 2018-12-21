import React from 'react';
import { StyleSheet, Text, View, SectionList, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Icon from '@expo/vector-icons'
import AddModal from './components/AddModal'
import data from './data'

class HomeScreen extends React.Component {
	static navigationOptions = {
		title: 'TODO LIST',
		headerStyle: {
			backgroundColor: 'mediumseagreen'
		},
		headerTintColor: 'white',
		headerTitleStyle: {
		fontWeight: 'bold',
		},

	}
	_onPressAdd = () => {
		this.refs.addModal.showAddModal()
	}

	_renderItem = ({item}) => {
		return (
			<View  style={styles.taskInfo}>
				<View style={styles.item}>
					<View>
						<Text>
							{item.info}
						</Text>
					</View>
					<View style={styles.timeView}>
						<View>
							<Text>
								{item.time}
							</Text>
						</View>
						<View  style={{marginLeft: 10}}>
							{item.completed
								? <Icon.MaterialCommunityIcons name="checkbox-marked-circle" size={30} color='green' />
								: <Icon.MaterialCommunityIcons name="checkbox-blank-circle-outline" size={30} color='green'/>
							}
						</View>
					</View>
				</View>
			</View>
		)
	}

	_renderHeader = ({section}) => {
		return (
			<View style={styles.taskTitle}>
				<Text>
					{String(section.title).toUpperCase()}
				</Text>
			</View>
		)
	}

	render() {
		const text = 'ngay thang nam'
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					<SectionList 
						sections={data}
						renderItem={this._renderItem}
						renderSectionHeader={this._renderHeader}
						keyExtractor={(item, index) => index}
					/>
					<AddModal ref={'addModal'} />
					
				</View>
				<TouchableHighlight
						onPress={this._onPressAdd}
					>
						<View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
							<Icon.MaterialIcons name='add-circle' size={60} color='green' />
						</View>
					</TouchableHighlight>
			</View>
		);
	}
}

class FilterScreen extends React.Component {
	render() {
		return(
			<View>
				<Text>Filter </Text>
			</View>
		)
	}
}

const AppNavigator = createStackNavigator({
	Home: {
		screen: HomeScreen
	}
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
	render() {
		return <AppContainer />
	}
}

const styles = StyleSheet.create({
	container: {flex: 1, backgroundColor: "#D3D3D3",},
	list: {  margin: 5 },
	task: { marginBottom: 10, marginTop: 10,},
	taskTitle: { margin: 10},
	taskInfo: {backgroundColor: 'white',},
	item: {flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', margin: 5},
	timeView:{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}
});
