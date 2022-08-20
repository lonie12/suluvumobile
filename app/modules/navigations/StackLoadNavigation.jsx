import Introduction from '../introduction/screens';
import Authentication from '../authentication/screens';

// 
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='introduction' component={Introduction} />
            <Stack.Screen name='authentication' component={Authentication} />
        </Stack.Navigator>
    )
}