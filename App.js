import React from 'react';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Icon from '@expo/vector-icons'

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

	_renderItem = item => {
		return (
			<View>
				
			</View>
		)
	}

	render() {
		const text = 'ngay thang nam'
		return (
			<View style={styles.container}>
				<SectionList 
					sections={[
						{
							title: 'feb 10 2016', 
							data: [
								{info: 'interview at google', time: '12: 30PM', completed: false},
								{info: 'Pick up the kids', time: '412: 30PM', completed: false}
							]
						},
						{
							title: 'feb 9 2016',
							data: [
								{info: 'Brain`s birthday party', time: '7:00PM', completed: false},
								{info: 'First project due and start second project', time: '9:30AM', completed: false}
							]
						},
						{
							title: 'feb 6 2016',
							data: [
								{info: 'Finish the first iteration before sleep', time: '9:00PM', completed: true},
								{info: 'Dinner at Partycity', timne: '7:00PM', completed: true},
								{info: 'Bring latop to the meeting', time: '8:00AM', completed: true},
								{info: 'Leg day', time: '6:00AM', completed: true}
							]
						},
						{
							title: 'feb 6 2016',
							data: [
								{info: 'Finish the first iteration before sleep', time: '9:00PM', completed: true},
								{info: 'Dinner at Partycity', timne: '7:00PM', completed: true},
								{info: 'Bring latop to the meeting', time: '8:00AM', completed: true},
								{info: 'Leg day', time: '6:00AM', completed: true}
							]
						},
					]}
					renderItem={}
				/>
			</View>
		);
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
	taskTitle: { margin: 5},
	taskInfo: {backgroundColor: 'white', padding: 10,},
	item: {flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', margin: 5},
	timeView:{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center'}
});
