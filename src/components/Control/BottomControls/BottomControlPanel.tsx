import React from 'react'
import { Flex } from '@chakra-ui/react';

type Props = {
    active: boolean;
    title: string;
    left?: string;
    right?: string;
    children?: JSX.Element | JSX.Element[];
}

const BottomControlPanel = ({active, title, left = '20px', right = 'unset', children}: Props) => {
  return (
    <Flex direction='column' visibility={active === true ? 'visible' : 'hidden'} h="350px" bgColor='#545454' w='250px' borderRadius='20px' position='absolute' zIndex={100} bottom="70px" left={left} padding="10px" right={right} >
        {title}
        {children}
    </Flex>
  )
}

export default BottomControlPanel