import { useState, useEffect } from 'react';
import socket from '../utils/socket';

export const useDroneResponse = () => {
    const [droneResponse, updateDroneResponse] = useState('');
    useEffect(() => {
        socket.on("droneresponse", updateDroneResponse);
        updateDroneResponse('')
      return () => socket.removeListener("droneresponse") as any;
    }, []);

    useEffect(() => {
      if(droneResponse === 'ok'){
        updateDroneResponse('')
      }
      if(droneResponse === 'error'){
        updateDroneResponse('')
      }
    }, [droneResponse])
    

    return droneResponse;
}