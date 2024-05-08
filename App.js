import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from './src/screens/HomeScreen';
import { SecondScreen } from './src/screens/SecondScreen';


const Tab = createMaterialBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="home" size={24} color="black" />          
        ),
      }}
      name="Home" component={HomeScreen} />
      <Tab.Screen 
            options={{
              tabBarLabel: 'View',
              tabBarIcon: ({ color }) => (
              <MaterialIcons name="add-circle" size={24} color="black" />
              ),
            }}
      name="View" component={SecondScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};