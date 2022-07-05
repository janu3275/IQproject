import React from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
  margin: "20%"
};



function Map({location,restrauntlocation,currentl}) {
 console.log(restrauntlocation)   
const center = {
        lat: (currentl.length>0?currentl[0]:-3.745),
        lng: (currentl.length>0?currentl[1]:-38.523)
      };  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDkF4A3d9y3gXv9Fx3qDqu7dz-Wijog1II"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
       {restrauntlocation.length>0?restrauntlocation.map((x)=> (
     
     <Marker position={{lat:x[0],lng:x[1]}}/>
        
        )):<></>}
        {location.length>0?location.map((x)=> (
     
     <Marker position={{lat:x[0],lng:x[1]}} />
        
        )):<></>}
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)


