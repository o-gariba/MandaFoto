import { SimpleGrid, Text } from "@chakra-ui/react"

function PostArea() {
    return (
        <>
            <SimpleGrid minChildWidth='250px' spacing='50px' >
                {/* Cards aqui */}
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
                <Text fontSize={'5xl'} color='red.500'>Card</Text>
            </SimpleGrid>
        </>
    )
}

export default PostArea