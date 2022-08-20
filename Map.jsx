import MapView, {Marker} from "react-native-maps"
import { StyleSheet, View, Platform, Text } from "react-native";
import React, {useEffect, useState} from "react";
import * as Location from 'expo-location'

const data = {
  latitude: 12,
  longitude: 1.12,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

export default () => {

  const [position, setPosition] = useState(data);

    useEffect(() => {
      (async () => {
        let {status} = Location.requestForegroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000})
        console.log(location)
        setPosition({...position, latitude: location.coords.latitude, longitude: location.coords.longitude})
      })()
    }, [])

    return (
        <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={position}
        onRegionChangeComplete={(region) => setPosition(position)}
      >
        <Marker coordinate={position}/>
      </MapView>
      {
        <Text> {JSON.stringify(position)} </Text>
      }
    </View>
    )
}

//create our styling code:
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });