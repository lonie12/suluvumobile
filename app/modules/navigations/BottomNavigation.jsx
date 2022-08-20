
import Accueil from '../Accueil';
import Panier from '../Panier';
import Parametres from '../Parametres';
import Recherche from '../Recherche';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import BottomTabActive from '../shared/components/BottomTabActive';
import BottomTabInactive from '../shared/components/BottomTabInactive';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle:{paddingHorizontal: 15}}}>
      <Tab.Screen name="Home" component={Accueil} options={{
        tabBarLabel: 'Accueil',
        tabBarIcon: ({focused}) => tabBarIcon(focused, 'home', 'Accueil')
      }}/>
      <Tab.Screen name="Search" component={Recherche} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => tabBarIcon(focused, 'search1', 'Explorer')
        }} />
      <Tab.Screen name="Cart" component={Panier} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => tabBarIcon(focused, 'shoppingcart', 'Panier')
        }} />
      <Tab.Screen name="Settings" component={Parametres} options={{
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => tabBarIcon(focused, 'user', 'Profile')
      }} />
    </Tab.Navigator>
  );
}

function tabBarIcon(focused, icon, title) {
  return focused ? (
    <BottomTabActive title={title} icon={icon} />
  ): (
    <BottomTabInactive icon={icon} />
  )
}