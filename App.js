import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					<View style={styles.task}>
						<View>
							<Text>Ngay thang nam</Text>
						</View>
						<View style={styles.taskInfo}>
							<View>
								<Text>Text 1</Text>
							</View>
							<View>
								<Text>Text 2</Text>
							</View>
						</View>
					</View>
				</View>
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
	taskInfo: {backgroundColor: 'white'}
});
