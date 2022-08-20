import Introduction from '../introduction/screens';
import Authentication from '../authentication/screens';
import AppContainer from '../appcontainer';

// 
import { createStackNavigator } from '@react-navigation/stack';
import LoginNavigation from './LoginNavigation';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
            <Stack.Screen name='introduction' component={Introduction} />
            <Stack.Screen name='authentication' component={LoginNavigation} />
            <Stack.Screen name='appcontainer' component={AppContainer} />
        </Stack.Navigator>
    )
}