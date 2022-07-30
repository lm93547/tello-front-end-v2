import React from 'react'
import JsmpegPlayer from './JsMpegPlayer'
import { Flex } from '@chakra-ui/react';

type Props = {
    status: string
}

const VideoPlayer = ({status}: Props) => {
  return (
    <Flex w="100%" direction='column' >
        <Flex w="100%" bgColor='#2b2b2b' height='calc(100vh - 64px)' >
            {status === "DISCONNECTED" ? <></> :<JsmpegPlayer
                poster={"../../images/dronePoster.jpg"}
                // wrapperClassName="video-player"
                videoUrl={"ws://localhost:3001/stream"}
                options={{}}
            />}
        </Flex>
    </Flex>
  )
}

export default VideoPlayer