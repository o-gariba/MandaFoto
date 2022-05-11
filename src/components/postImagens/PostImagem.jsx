import { Center, Box, Image } from '@chakra-ui/react'

const PostImagem = () => {
    return (
        <>
            <Center>
                <Box
                    overflow={'hidden'}
                    maxWidth='500px'
                    borderWidth={'2px'}
                >
                    <Image src={`https://picsum.photos/seed/${Math.random()}/500`} alt={''} />
                </Box>
            </Center>
        </>
    )
}

export default PostImagem