import React from 'react'
import { Flex } from '@chakra-ui/react';

type Props = {
    pitch: string;
    roll: string;
    yaw: string;
    height: string;
}

const TopHUD = ({pitch, roll, yaw, height}: Props) => {
  return (
    <Flex mr='4' ml='4' mt='4' position='absolute' zIndex={99999} w="90%" justifyContent='space-between' >
        <Flex>
            Pitch: {pitch}
        </Flex>
        <Flex>
            Roll: {roll}
        </Flex>
        <Flex>
            Yaw: {yaw}  
        </Flex>
        <Flex>
            Height: {height}
        </Flex>
    </Flex>
  )
}

export default TopHUD