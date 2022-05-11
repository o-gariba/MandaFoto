import { SimpleGrid } from "@chakra-ui/react"

function PostArea({ children }) {
    return (
        <SimpleGrid 
            minChildWidth='350px'
            spacing='100px'
            m={'0 8%'}
        >
            {children}
        </SimpleGrid>
    )
}

export default PostArea