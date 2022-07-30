import React from 'react'
import { useState } from 'react';
import { sendCommand } from '../../../utils/sendCommand';
import { BiArrowFromBottom, BiArrowFromTop } from 'react-icons/bi'
import { ImArrowLeft2, ImArrowRight2, ImArrowUp2, ImArrowDown2 } from 'react-icons/im'
import { SimpleGrid, Button, Flex } from '@chakra-ui/react';

type Props = {}

const ControlGrid = (props: Props) => {
    const [turnState, setTurnState] = useState(15)

    const amount = 100;
    const turns = [15, 30, 60, 90, 180, 360]
    return (
        <Flex direction='row' justifyContent='space-between' w='100%'>
        <Flex mt='5' direction="column" >
            <SimpleGrid gridGap={2} gridTemplateRows={'repeat(3, 1fr)'} gridTemplateColumns={'1fr 1.25fr 1fr'} >
                <Button onClick={sendCommand(`ccw ${turnState}`)}>
                    <span>⟲</span> {turnState}
                </Button>
                <Button title={`forward ${amount}cm`}  onClick={sendCommand(`forward ${amount}`)}>
                    <span ><ImArrowUp2 /></span>
                </Button>
                <Button  onClick={sendCommand(`cw ${turnState}`)}>
                    <span >⟳</span> {turnState}
                </Button>
                <Button title={`left ${amount}cm`}  onClick={sendCommand(`left ${amount}`)}>
                    <span ><ImArrowLeft2 /></span>
                </Button>
                <Flex justifyContent='space-between' >
                    <Button title={`up ${amount}cm`}  onClick={sendCommand(`up ${amount}`)}>
                        <span ><BiArrowFromBottom /></span>
                    </Button>
                    <Button title={`down ${amount}cm`}  onClick={sendCommand(`down ${amount}`)}>
                        <span ><BiArrowFromTop /></span>
                    </Button>
                </Flex>
                <Button title={`right ${amount}cm`}  onClick={sendCommand(`right ${amount}`)}>
                    <span ><ImArrowRight2 /></span>
                </Button>
                <Button  onClick={sendCommand(`ccw ${turnState}`)}>
                    <span >⟲</span> {turnState}
                </Button>
                <Button title={`back ${amount}cm`}  onClick={sendCommand(`back ${amount}`)}>
                    <span ><ImArrowDown2 /></span>
                </Button>
                <Button onClick={sendCommand(`cw ${turnState}`)}>
                    <span >⟳</span> {turnState}
                </Button>
            </SimpleGrid>
            <Flex mt="5" w="100%" justifyContent='space-between'>
                <Button onClick={sendCommand("takeoff")}>
                    Take Off
                </Button>
                <Button onClick={sendCommand("land")}>
                    Land
                </Button>
            </Flex>
        </Flex>
        </Flex>
    )
}

export default ControlGrid