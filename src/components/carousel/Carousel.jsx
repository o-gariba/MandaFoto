import { Wrap, WrapItem, Avatar, Center, Button, Box, Flex, Image} from "@chakra-ui/react"

import { Link } from "react-router-dom"

const Carousel = ({ avatars }) => {
    return (
        <Center 
            m={'5% 7%'}
            p={'2% 2%'}
            border={'3px solid green'}
            borderRadius='15px'
        >
            <Flex
                gap={'8%'}

            > 
                <Box
                    as="button"
                >
                    <Link to={'/user1'}>
                        <Image 
                            borderRadius={'full'}
                            src={avatars[0]}
                            alt='rosto de uma pessoa'
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Image 
                    borderRadius={'full'}
                    src={avatars[1]}
                    alt='rosto de uma pessoa'
                    />
                </Box>
                <Box
                    as="button"
                >
                    <Image 
                        borderRadius={'full'}
                        src={avatars[2]}
                        alt='rosto de uma pessoa'
                    />
                </Box>
                <Box
                    as="button"
                >
                    <Image 
                        borderRadius={'full'}
                        src={avatars[3]}
                        alt='rosto de uma pessoa'
                    />
                </Box>
                <Box
                    as="button"
                >
                    <Image 
                        borderRadius={'full'}
                        src={avatars[4]}
                        alt='rosto de uma pessoa'
                    />
                </Box>
            </Flex>
            {/* <Wrap spacing={'50px'}>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='avatar1' src={avatars[0]} />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src={avatars[1]} />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src={avatars[2]} />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src={avatars[3]} />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src={avatars[4]} />
                    </Box>
                </WrapItem>
            </Wrap> */}
        </Center>
    )
}

export default Carousel