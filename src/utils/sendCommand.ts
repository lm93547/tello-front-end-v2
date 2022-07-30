import socket from "./socket";

export const sendCommand = (command: any) => {
    return function () {
      console.log(`Sending the command ${command}`);
      socket.emit("command", command, (response:any)=>{
        console.log(response.status)
      });
    };
}