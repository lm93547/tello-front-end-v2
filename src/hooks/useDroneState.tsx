import { useState, useEffect } from 'react';
import socket from '../utils/socket';

export const useDroneState = () => {
    const [droneState, updateDroneState] = useState({});
    useEffect(() => {
      socket.on("dronestate", updateDroneState);
      return () => socket.removeListener("dronestate") as any;
    }, []);
    return droneState;
}