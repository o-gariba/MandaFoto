import { Box, Center, Image } from "@chakra-ui/react"

import logo from '../assets/logo2.png'

const Footer = () => {
    return (
        <Box
            bg={'gray.400'}
            height='auto'
            marginTop={'8%'}
        >
            <Center>
                <Image
                    src={logo}
                    width='200px'
                    margin={'20px'}
                />
            </Center>
        </Box>
    )
}

export default Footer