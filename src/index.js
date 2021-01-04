import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/HomePage';
import DetailsPage from './app/DetailsPage';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Styles } from './theme';
const Stack = createStackNavigator();

class App extends Component {
	constructor(props) {
		super(props);    
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
				        headerStyle: {
				          backgroundColor: 'black',
				        },
				        headerTintColor: '#fff',
				        headerTitleStyle: {
				          fontWeight: 'bold',
				        },
				      }}>
			        <Stack.Screen name="Home" component={HomePage} options={{title: '',
			        	headerLeft: () => (
				            <Icon style={{marginLeft:15}} name='navicon' size={20} color='#fff' />
				        ),
			    		headerRight: () => (
				            <Avatar
							  rounded
							  source={{uri:'https://www.w3schools.com/w3images/avatar6.png'}}
							/>
				        ),}}/>
			        <Stack.Screen name="Details" component={DetailsPage} options={{ title: 'Live Tracking' }}/>
			    </Stack.Navigator>
			</NavigationContainer>
		);
	}
}

export default App;