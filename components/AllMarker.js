import { View, Text } from 'react-native'
import React from 'react'
import MapView,{ Marker,Polyline  } from 'react-native-maps';


export default function AllMarker() {
    const coordinates = [
        {
          latitude: 14.036022,
          longitude: 100.731569,
        },
        {
          latitude: 14.03605,
          longitude: 100.7271,
        },
        {
          latitude: 14.03451,
          longitude: 100.726,
        },
        {
          latitude: 14.0328216,
          longitude: 100.72278,
        },
        {
          latitude: 14.034,
          longitude: 100.7239293,
        },
        {
          latitude: 14.034801,
          longitude: 100.7247793,
        },
        {
          latitude: 14.03578,
          longitude: 100.7247793,
        },
        {
          latitude: 14.038240,
          longitude: 100.725008,
        },
        {
          latitude: 14.039093,
          longitude: 100.726802,
        },
        {
          latitude: 14.038989,
          longitude: 100.728492,
        },
        {
          latitude: 14.038032,
          longitude: 100.728490,
        },
        {
          latitude: 14.039484,
          longitude: 100.730230,
        },
        {
          latitude: 14.039806,
          longitude: 100.731531,
        },
        {
          latitude: 14.037957,
          longitude: 100.730382,
        },
        {
          latitude: 14.036045,
          longitude: 100.730380,
        },
      ];
      let itemList = coordinates.map((item,index)=>{
        return <Marker  key={index} coordinate={item} />
      })
  return (
    <View>
      {itemList}
     
    </View>
  )
}