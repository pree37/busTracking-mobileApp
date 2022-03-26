import { View, Text } from 'react-native'
import React from 'react'
import MapView,{ Marker,Polyline  } from 'react-native-maps';

export default function MapRoute() {
  const coordinates1 = [
    {
      latitude: 14.036022,
      longitude: 100.731569,
    },{
      latitude: 14.03594,
      longitude: 100.7271,
    },
    {
      latitude: 14.035958,
      longitude: 100.726342,
    },
    {
      latitude: 14.035903,
      longitude: 100.726200,
    },
    {
      latitude: 14.035788,
      longitude: 100.726123,
    },
    {
      latitude: 14.034882,
      longitude: 100.7261,
    },
    {
      latitude: 14.034753,
      longitude: 100.726144,
    },
    {
      latitude: 14.034641,
      longitude: 100.726256,
    },
    {
      latitude: 14.034650,
      longitude: 100.724894,
    },
    {
      latitude: 14.034215,
      longitude: 100.724897,
    },
    {
      latitude: 14.034101,
      longitude: 100.724873,
    },
    {
      latitude: 14.033997,
      longitude: 100.724784,
    },
    {
      latitude: 14.033943,
      longitude: 100.724690,
    },
    {
      latitude: 14.033904,
      longitude: 100.722571,
    },
    {
      latitude: 14.032852,
      longitude: 100.722558,
    },
    {
      latitude: 14.032729,
      longitude: 100.722746,
    },
    {
      latitude: 14.032552,
      longitude: 100.722856,
    },
    {
      latitude: 14.032320,
      longitude: 100.722861,
    },
    {
      latitude: 14.032104,
      longitude: 100.722732,
    },
    {
      latitude: 14.032005,
      longitude: 100.722520,
    },
    {
      latitude: 14.032013,
      longitude: 100.722258,
    },
    {
      latitude: 14.032169,
      longitude: 100.722046,
    },
    {
      latitude: 14.032409,
      longitude: 100.721966,
    },
    {
      latitude: 14.032625,
      longitude: 100.721999,
    },
    {
      latitude: 14.032817,
      longitude: 100.722178,
    },
    {
      latitude: 14.032867,
      longitude: 100.722406,
    },
    {
      latitude: 14.032852,
      longitude: 100.722558,
    }
  ];

  const coordinates2 = [
    {
      latitude: 14.034215,
      longitude: 100.724897,
    },
    {
      latitude: 14.036432,
      longitude: 100.724895,
    },
    {
      latitude: 14.036568,
      longitude: 100.724827,
    },
    {
      latitude: 14.036626,
      longitude: 100.724695,
    },
    {
      latitude: 14.036623,
      longitude: 100.723695,
    },
    {
      latitude: 14.037492,
      longitude: 100.723681,
    },
    {
      latitude: 14.037679,
      longitude: 100.723780,
    },
    {
      latitude: 14.037781,
      longitude: 100.723966,
    },
    {
      latitude: 14.037809,
      longitude: 100.725143,
    },
    {
      latitude: 14.039014,
      longitude: 100.725135,
    },
    {
      latitude: 14.039030,
      longitude: 100.728380,
    },
    {
      latitude: 14.037848,
      longitude: 100.728375,
    },
    {
      latitude: 14.037854,
      longitude: 100.730317,
    },
    {
      latitude: 14.039764,
      longitude: 100.730333,
    },
    {
      latitude: 14.039738,
      longitude: 100.731521,
    },
    {
      latitude: 14.036022,
      longitude: 100.731569,
    },
    {
      latitude: 14.036,
      longitude: 100.730320,
    },
    {
      latitude: 14.034580,
      longitude: 100.730330,
    },
    {
      latitude: 14.034153,
      longitude: 100.730373,
    },
    {
      latitude: 14.033511,
      longitude: 100.730379,
    },
    {
      latitude: 14.032830,
      longitude: 100.730318,
    },
    {
      latitude: 14.0327772,
      longitude: 100.730234,
    },
    {
      latitude: 14.032753,
      longitude: 100.724108,
    },
    {
      latitude: 14.032883,
      longitude: 100.723836,
    },
    {
      latitude: 14.033055,
      longitude: 100.723690,
    },
    {
      latitude: 14.033920,
      longitude: 100.723674,
    }
  ];
  
  
  return (
    <View>
       <Polyline
          coordinates={coordinates1}
          strokeColor="#959595" 
          strokeWidth={4}
    />
    <Polyline
          coordinates={coordinates2}
          strokeColor="#959595" 
          strokeWidth={4}
    />
    </View>
  )
}