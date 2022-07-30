import { useEffect, useState } from 'react';
import socket from '../utils/socket';

export const useSocket = () => {
    const [status, updateStatus] = useState("DISCONNECTED");
    useEffect(() => {
      socket.on("status", updateStatus)
      return () => {socket.removeListener("status") as any; socket.emit('end')}
    }, []);
    return status;
}