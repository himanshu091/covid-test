import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Reports from './screens/Reports';
import QRTest from './screens/QRTest';
import { connect } from 'react-redux';
import Settings from './screens/Settings';



// const Tab = createBottomTabNavigator();
// function HomeTabs() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="HomeScreen" component={Home} />
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="MyReservations" component={MyReservations} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     );
//   }

const Stack = createStackNavigator();
function Routing({token}) {
    return (
        <NavigationContainer>
            {!token && <Stack.Navigator headerMode="none" screenOptions={{ animationEnabled: false }}>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>}
            {token && <Stack.Navigator headerMode="none" screenOptions={{ animationEnabled: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Reports" component={Reports} />
                <Stack.Screen name="QRTest" component={QRTest} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Settings" component={Settings} />

            </Stack.Navigator>}
        </NavigationContainer>
    );
}
const mapStateToProps = state => {
    return {
        token: state.auth.token
    }
}
export default connect(mapStateToProps)(Routing);