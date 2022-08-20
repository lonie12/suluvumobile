import Home from './Home';
// 
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} />
        </Stack.Navigator>
    )
}