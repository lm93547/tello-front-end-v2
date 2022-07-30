import React from 'react'
import { Flex } from '@chakra-ui/react';
import VideoPlayer from '../VideoPlayer.tsx';
import TopHUD from '../../Control/HeadsUpDisplay/TopHUD';
import BottomControlWrapper from '../../Control/BottomControls/BottomControlWrapper';
import Map from '../../Info/Map';

type Props = {
    droneState: any;
    status: string;
    droneResponse: string;
}

const Wrapper = ({droneState, status, droneResponse}: Props) => {
  return (
    <Flex>
        <TopHUD
            pitch={droneState.pitch}
            roll={droneState.roll}
            yaw={droneState.yaw}
            height={droneState.h}
        />
        <VideoPlayer status={status} />
        <BottomControlWrapper droneResponse={droneResponse} droneState={droneState} />
    </Flex>
  )
}

export default Wrapper