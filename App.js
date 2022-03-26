import { View, Text,Button,StyleSheet,Alert,Image  } from 'react-native'
import React, { useState,useEffect,Component} from 'react'
import database from '@react-native-firebase/database';
import {ActivityIndicator} from 'react-native';
import MapView,{ Marker,Polyline  } from 'react-native-maps';
import  MapRoute  from './components/MapRoute';
import { coordinates,intialState,intialState2 } from './components/coordinate';
import Geolocation from '@react-native-community/geolocation';
import {useNetInfo} from "@react-native-community/netinfo";

import { styles } from './style';

export default function App() {
  let itemList = coordinates.map((item,index)=>{
    return <Marker  key={index} coordinate={item} image={require('./images/Stop.png')} />
  })

  const [curentPosition, setCurentPosition] = useState(intialState);
  const [busPosition, setBusPosition] = useState(intialState2);
  
  useEffect(() =>{ 
    database()
      .ref('gps/')
      .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
        const {longitude,latitude} = snapshot.val();
        setBusPosition({
          ...busPosition,
           latitude,
           longitude,
       })
    });
  }, [])

  useEffect(() =>{
    Geolocation.getCurrentPosition(
      position => {
        const {longitude,latitude} = position.coords;
        setCurentPosition({
          ...curentPosition,
          latitude,
          longitude,
        })
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
  }, [])
  
  const netInfo = useNetInfo();

  return(
    <View style={styles.background}>
       <MapView
        style={styles.map}
        region={curentPosition}
        showsUserLocation={true}
        >
        {itemList}
        <MapRoute />
        <Marker coordinate={{latitude : busPosition.latitude, longitude :busPosition.longitude}} image={require('./images/bus.png')} />
            
      </MapView>
      
      <Text style={{fontSize: 20,textAlign: 'center'}}>Test</Text>
      <Text style={{fontSize: 15}}>latitude {busPosition.latitude}</Text>
      <Text style={{fontSize: 15}}>longitude {busPosition.longitude}</Text>
   
    
    </View>
  ) 
}

/*
  setBusPosition({
          ...busPosition,
           latitude,
           longitude,
       })

          <Text>Type: {netInfo.type}</Text>
      <Text>Is Connected? {netInfo.isConnected.toString()}</Text>
*/

