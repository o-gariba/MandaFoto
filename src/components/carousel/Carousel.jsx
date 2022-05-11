import { Wrap, WrapItem, Avatar, Center, Button, Box} from "@chakra-ui/react"

const Carousel = () => {
    return (
        <Center 
            m={'5% 7%'}
            p={'5% 0'}
            border={'3px solid green'}
            borderRadius='15px'
        >
            <Wrap spacing={'50px'}>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src='https://picsum.photos/seed/façsldkf/200' />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src='https://picsum.photos/seed/çlaksfdj/200' />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src='https://picsum.photos/seed/laçfdskfj/200' />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src='https://picsum.photos/seed/afsdiufb/200' />
                    </Box>
                </WrapItem>
                <WrapItem>
                    <Box as="button">
                        <Avatar size={'xl'} name='Dan Abrahmov' src='https://picsum.photos/seed/asidfuasfdvy/200' />
                    </Box>
                </WrapItem>
            </Wrap>
        </Center>
    )
}

export default Carousel