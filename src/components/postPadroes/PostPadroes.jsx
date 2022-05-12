import { Center, Box, Flex, Image, Icon, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Textarea, Button } from '@chakra-ui/react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiCommentDetail } from 'react-icons/bi'
import { useState } from 'react'
import { ChatIcon } from '@chakra-ui/icons'

const PostPadroes = ({ criarComentario, comentario }) => {

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
            return <Icon as={AiFillHeart} boxSize={8} color='red' />
        }
        else {
            return <Icon as={AiOutlineHeart} boxSize={8} />
        }
    }

    const qualIconSalvar = (estado) => {
        if (estado) {
            return <Icon as={BsBookmarkHeartFill} boxSize={8} />
        }
        else {
            return <Icon as={BsBookmarkHeart} boxSize={8} />
        }
    }

    const [comentarios, setComentarios] = useState([])

    const handleComentario = (comentario) => {
        // console.log(comentarios)
        const novoArrayComentario = [...comentarios, comentario]
        setComentarios(novoArrayComentario)
    }

    const propriedades = {
        nomeUser: 'userTeste',
        curtir: qualIconCoracao(curtido),
        // comentar: <Icon as={BiCommentDetail} boxSize={} />,
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={8} />,
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
                    <Image src={`https://picsum.photos/seed/${Math.random()}/410`} alt={''} />
                    <Box
                        p='1'
                        borderWidth={'1px'}
                    >
                        {/* <Flex
                            ml={0}
                            gap='2'
                            m={'10px 0'}
                        > */}
                            {/* <Box as="button">
                                {propriedades.comentar}
                            </Box> */}

                        {/* </Flex> */}

                        <Accordion allowToggle>
                            <AccordionItem>
                                <Flex
                                    ml={0}
                                    gap='2'
                                    m={'10px 0'}
                                >
                                    <Box as="button" onClick={curti}>
                                        {propriedades.curtir}
                                    </Box>
                                    <AccordionButton
                                        boxSize={'fit-content'}
                                    >
                                        <Box
                                            // boxSize={'auto'}
                                        >
                                           <ChatIcon boxSize={'6'}/> 
                                        </Box>
                                    </AccordionButton>
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

                                <AccordionPanel  pb={2}>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            // criarComentario(comentarios)
                                            console.log(e.target[0].value)
                                            handleComentario(e.target[0].value)
                                            e.target.reset()
                                        }}
                                    >
                                        <Textarea 
                                            size={'md'}
                                            resize='none'
                                            placeholder='Comente aqui...'
                                            rows={'1'}
                                            width='70%'
                                            // onChange={e => {
                                            //     setComentarios(e.target.value)
                                            // }}
                                        />
                                        <Button
                                            width={'80px'}
                                            type='submit'
                                            colorScheme={'red'}
                                        >
                                            Publicar
                                        </Button>
                                    </form>
                                    {comentarios.map((com, index) => {
                                        return <p key={index}>{com}</p>
                                    })}
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>

                    </Box>
                </Box>
            </Center>
        </>
    )
}

export default PostPadroes