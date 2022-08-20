import Home from './Home';
import Validate from './Validate';
import Payment from './Payment';

// 
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='home' component={Home} />
            <Stack.Screen name='valide' component={Validate} />
            <Stack.Screen name='pay' component={Payment} />
        </Stack.Navigator>
    )
}