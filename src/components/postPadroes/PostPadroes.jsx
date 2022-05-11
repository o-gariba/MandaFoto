import { Center, Box, Flex, Image, Icon, Text } from '@chakra-ui/react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiCommentDetail } from 'react-icons/bi'
import { useState } from 'react'

const PostPadroes = () => {

    const [curtido, setCurtido] = useState(false)
    const [salvo, setSalvo] = useState(false)

    const curti = () => {
        setCurtido(!curtido)
    }

    const salvei = () => {
        setSalvo(!salvo)
    }

    const qualIconCoracao = (estado) => {
        if (estado) { 
            return <Icon as={AiFillHeart} boxSize={5} color='red' />
        }
        else {
            return <Icon as={AiOutlineHeart} boxSize={5} />
        }
    }

    const qualIconSalvar = (estado) => {
        if (estado) { 
            return <Icon as={BsBookmarkHeartFill} boxSize={5} />
        }
        else {
            return <Icon as={BsBookmarkHeart} boxSize={5} />
        }
    }

    const propriedades = {
        nomeUser: 'userTeste',
        curtir: qualIconCoracao(curtido),
        comentar: <Icon as={BiCommentDetail} boxSize={5} />,
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={5} />,
        salvar: qualIconSalvar(salvo),
        descricaoPost: 'descrição do post',
    }
    
    return (
        <>
            <Center>
                <Box
                    overflow={'hidden'}
                    maxWidth='500px'
                    borderWidth={'2px'}
                >
                    <Flex
                        p={1}
                        borderWidth='1px'
                        gap='15px'
                    >
                        <Image borderRadius={'full'} boxSize='50px' src={`https://picsum.photos/seed/${Math.random()}/200`} />
                        <Text fontSize={'xl'}>
                            {propriedades.nomeUser}
                        </Text> 
                    </Flex>
                    <Image src={`https://picsum.photos/seed/${Math.random()}/400`} alt={''} />
                    <Box
                        p='1'
                        borderWidth={'1px'}
                    >
                        <Flex
                            ml={0}
                            gap='2'
                        >
                            <Box as="button" onClick={curti}>
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
                                <Box as="button" onClick={salvei}>
                                    {propriedades.salvar}
                                </Box>
                            </Flex>

                        </Flex>

                        <Box>
                            {propriedades.descricaoPost}
                        </Box>
                    </Box>
                </Box>
            </Center>
        </>
    )
}

export default PostPadroes