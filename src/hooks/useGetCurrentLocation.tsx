import React from 'react'
import { useEffect, useState } from 'react';


const useGetCurrentLocation = () => {
    const [userLocation, setUserLocation] = useState({lat: 0, lng: 0});
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        });
    })
    return userLocation;
}

export default useGetCurrentLocation