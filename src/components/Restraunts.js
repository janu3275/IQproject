import React, { useState } from "react";
import axios from "axios";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Map from "./Map";



const Restraunts = ()=>{
    const [Location,setLocation]= useState([])
    const [Restrauntlocation,setRestrauntlocation]= useState([])
    const [currentlocation, setcurrentlocation]  = useState([])

const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
         console.log("not found")
        }

      }

const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
      }
      
const showPosition = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        console.log( lat) 
        console.log( long)
        const newarr = [...Location]
        const locationarr =[]
        while(locationarr.length<1000 ){
         const nlat = getRandomArbitrary(lat-0.2,lat+0.2)
         const nlong = getRandomArbitrary(long-0.2,long+0.1)
         if(!locationarr.includes([nlat,nlong])){
         locationarr.push([nlat,nlong])
         }
        }

        newarr.push([lat,long])
        if(newarr.length>10){
            newarr.shift()
        }
        setcurrentlocation([lat,long])
        setLocation(newarr)
        setRestrauntlocation(locationarr)
        
      }
   
console.log(Location)
console.log(Restrauntlocation)
return (
    <>
    <button onClick={getLocation}>Get 1000 restraunts near me </button>
    <Map location = {Location} restrauntlocation={Restrauntlocation} currentl = {currentlocation}/>
    </>
)

}

export default Restraunts;