import React, {useEffect} from 'react'
import Nav from '../components/UI/NavBar'
import Wrapper from '../components/UI/Wrapper.tsx';
import { useSocket } from '../hooks/useSocket';
import { useDroneState } from '../hooks/useDroneState';
import { useDroneResponse } from '../hooks/useDroneResponse';

type Props = {}

const Home = (props: Props) => {

    const status = useSocket();
    const droneState = useDroneState();
    const droneResponse = useDroneResponse();    
    console.log("🚀 ~ file: home.tsx ~ line 15 ~ Home ~ droneResponse", droneResponse)

    return (
        <div>
            <Nav droneStatus={status} siteTitle='DJI Tello Drone Control' />
            <Wrapper droneState={droneState} status={status} droneResponse={droneResponse} />
        </div>
    )
}

export default Home