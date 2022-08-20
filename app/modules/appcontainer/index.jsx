import { useEffect } from "react";
import { View, Dimensions, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/Ionicons';
import BottomNavigation from "../navigations/BottomNavigation";
import { titleColor } from "../shared/utils/colors";

const height = Dimensions.get('window').height;

export default ({navigation}) => {

  
  return (
    <View style={{flex: 1}}>
      {/* <View style={{height: 30, width: '100%', paddingHorizontal: '5%'}}>
        <View style={{height: 30, width: 30, alignSelf: 'flex-end'}}>
          <MaterialIcons 
            name="md-notifications-outline"
            size={30}
            color={titleColor}
            style={{alignSelf: 'flex-end'}}
          />
          <View style={{position: 'absolute', top: 1, backgroundColor: 'red', paddingHorizontal: 1, borderRadius: '50%', right: -1}}>
            <Text style={{color: 'white'}}>12</Text>
          </View>
        </View>
      </View> */}
      
      <BottomNavigation />

      {/* <View style={{height: height - 30, width: '100%', backgroundColor: 'gray', flex: 1}}>
      </View> */}
    </View>
  );
}