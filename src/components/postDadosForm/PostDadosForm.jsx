import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react"
// import { StarIcon, ExternalLinkIcon, ChatIcon, AddIcon } from '@chakra-ui/icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiCommentDetail } from 'react-icons/bi'

import { Center } from "@chakra-ui/react"

const PostDadosForm = ({ posts }) => {

    const propriedades = {
        curtir: <Icon as={AiOutlineHeart} boxSize={5} />,
        comentar: <Icon as={BiCommentDetail} boxSize={5} />,
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={5} />,
        salvar: <Icon as={BsBookmarkHeart} boxSize={5} />,
        descricao: 'descrição do post',
    }

    return (
        <>
            {posts.map((post, index) => {
                return(
                    <Center>
                        <Box 
                            maxW={'md'}
                            // borderwidth='2px'
                            overflow={'hidden'}
                            maxWidth='250px'
                        >
                            <Flex
                                // m={1}
                                p={1}
                                borderWidth='1px'
                                // borderColor={'green'}
                                gap='10px'
                            >
                                <Image borderRadius={'full'} boxSize='30px' src={post.imgAvatar} />
                                {post.usuario}
                            </Flex>
                            <Image src={post.imgPost} alt={propriedades.imageAlt} />     
                            <Box 
                                p='1'
                                borderWidth={'1px'}
                                // borderColor='blue'
                            >
                                <Flex
                                    ml={0}
                                    // borderWidth='1px'
                                    // borderColor={'red'}
                                    gap='2'
                                >
                                    <Box as="button">
                                        {propriedades.curtir}
                                    </Box>
                                    <Box as="button">
                                        {propriedades.comentar}
                                    </Box>
                                    <Box as="button">
                                        {propriedades.compartilhar}
                                    </Box>

                                    <Flex
                                        ml={'auto'} 
                                    >
                                        <Box as="button">
                                            {propriedades.salvar}
                                        </Box>
                                    </Flex>

                                </Flex>

                                <Box>
                                    {propriedades.descricao}
                                </Box>
                            </Box>
                        </Box> 
                    </Center>
                )
            })}
        </>
    )
}

export default PostDadosForm
