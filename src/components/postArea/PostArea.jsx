import { Container, SimpleGrid, Text } from "@chakra-ui/react"
import PostImagem from "../postImagens/PostImagem"

import PostPadroes from "../postPadroes/PostPadroes"

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