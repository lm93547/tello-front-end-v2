import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Heading,
    Text,
    Tooltip,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, WarningIcon, CheckCircleIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

type Props = {
    siteTitle: string;
    droneStatus: string;
}

export default function Nav({siteTitle, droneStatus}:Props) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box zIndex={99999} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Heading size="md" >{siteTitle}</Heading>
                        
                        {/* <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack> */}
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Tooltip label={droneStatus === "DISCONNECTED" ? "Drone Disconnected" : "Drone Connected"} >
                            {droneStatus === "DISCONNECTED" ? <WarningIcon mr='4' color='yellow.400' /> : <CheckCircleIcon mr='4' color='green.400' />}
                        </Tooltip>
                        <Tooltip label={colorMode === 'light' ? 'Dark Mode' : "Light Mode"} >
                            {colorMode === 'light' ? <MoonIcon onClick={toggleColorMode} mr='2' /> : <SunIcon onClick={toggleColorMode} mr='2' />}
                        </Tooltip>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Image
                                    src={
                                        '/images/drone.png'
                                    }
                                    w="45px"
                                    h="45px"
                                />
                            </MenuButton>
                            <MenuList zIndex={9999999} >
                                <MenuItem><Text>About Me</Text></MenuItem>
                                <MenuItem><Text>About Me</Text></MenuItem>
                                <MenuItem><Text>About Me</Text></MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}