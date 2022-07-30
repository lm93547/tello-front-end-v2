import { Box } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { CircleMarker, MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import useGetCurrentLocation from '../../../hooks/useGetCurrentLocation'

function ChangeMapView({coords}:any) {
    const map = useMap();
    map.setView([coords.lat, coords.lng], 13);
  
    return null;
}

const Map = () => {
    const userLocation = useGetCurrentLocation();

  return (
    <Box style={{height: '100%', width: '100%', zIndex: 9999999}} >
        <MapContainer  style={{height: '100%', width: '100%', zIndex: 9999999}}  center={[-50, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeMapView coords={userLocation} />
            <CircleMarker center={userLocation}>
            </CircleMarker>
        </MapContainer>
    </Box>
  )
}

export default Map