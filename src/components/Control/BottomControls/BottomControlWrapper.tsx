import React from 'react'
import { Button, Flex, StatUpArrow, Tooltip } from '@chakra-ui/react';
import BottomControlPanel from './BottomControlPanel';
import {GiAirplaneDeparture, GiRetroController, GiSettingsKnobs} from 'react-icons/gi';
import {BsPinMapFill} from 'react-icons/bs';
import ControlGrid from '../ControlGrid';
import Tilt from '../Tilt';
import Map from '../../Info/Map';

type Props = {
    droneState: any
    droneResponse: string;
}

const BottomControlWrapper = ({droneState, droneResponse}: Props) => {

  const [active, setActive] = React.useState({map: false, flightPlan: false, controls: true, settings: false});
  
  return (
    <>
        <BottomControlPanel title="Map" active={active.map}>
            <Map />
        </BottomControlPanel>
        <BottomControlPanel title="Flight Plan" active={active.flightPlan} left="290px" />
        <BottomControlPanel title="Controls" active={active.controls} right="20px" left="unset">
            <ControlGrid />
            <>{droneResponse !== "" ? droneResponse === "error" ? "error" : "ok" : ''}</>
        </BottomControlPanel>
        <BottomControlPanel title="Settings" active={active.settings} right="290px" left="unset">
            <Tilt  
                pitch={droneState.pitch}
                roll={droneState.roll}
                yaw={droneState.yaw}
            />
        </BottomControlPanel>
        <Flex ml="4" mr="4" position={'absolute'} zIndex={99999} bottom="15px" w="99%" justifyContent="space-between" >
            <Flex>
                <Tooltip label="Map">    
                    <Button 
                        onClick={()=>{
                            setActive((prevState)=>{
                                return {...prevState, map: !prevState.map}
                            })
                        }} 
                        mr="4" 
                    >
                        <BsPinMapFill color={active.map === true ? 'green' : 'red'} />
                    </Button>
                </Tooltip>
                <Tooltip label="Flight Controls" >
                    <Button
                        onClick={()=>{
                            setActive((prevState)=>{
                                return {...prevState, flightPlan: !prevState.flightPlan}
                            })
                        }}
                    >
                        <GiAirplaneDeparture color={active.flightPlan === true ? 'green' : 'red'} />
                    </Button>
                </Tooltip>
            </Flex>
            <Flex mr="4">
                <Tooltip label="Settings" >
                    <Button 
                        onClick={()=>{
                            setActive((prevState)=>{
                                return {...prevState, settings: !prevState.settings}
                            })
                        }}
                        mr="4"
                    >
                        <GiSettingsKnobs color={active.settings === true ? 'green' : 'red'} />
                    </Button>
                </Tooltip>
                <Tooltip label="Controls" >
                    <Button 
                        onClick={()=>{
                            setActive((prevState)=>{
                                return {...prevState, controls: !prevState.controls}
                            })
                        }}
                    >
                        <GiRetroController color={active.controls === true ? 'green' : 'red'} />
                    </Button>
                </Tooltip>
            </Flex>
        </Flex>
    </>
  )
}

export default BottomControlWrapper