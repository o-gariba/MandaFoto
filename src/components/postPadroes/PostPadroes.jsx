import { Center, Box, Flex, Image, Icon, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Textarea, Button, useDisclosure, useToast, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from '@chakra-ui/react'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiCommentDetail } from 'react-icons/bi'
import { useRef, useState } from 'react'
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

    const { onOpen, isOpen, onClose } = useDisclosure()

    const initialRef = useRef()

    const toastCompartilhou = useToast()

    const propriedades = {
        nomeUser: 'userTeste',
        curtir: qualIconCoracao(curtido),
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={8} />,
        salvar: qualIconSalvar(salvo),
        descricaoPost: 'descrição do post',
    }

    return (
        <>
            <Center>
                <Box
                    overflow={'hidden'}
                    maxWidth='410px'
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
                                        >
                                           <ChatIcon boxSize={'6'}/> 
                                        </Box>
                                    </AccordionButton>
                                    <Box as="button"
                                        onClick={onOpen}
                                    >
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

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Para qual user quer encaminhar?
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={4}>
                        <FormControl>
                            <FormLabel>
                                Qual user vai receber o post?
                            </FormLabel>
                            <Input
                                ref={initialRef}
                                placeholder='@nome_user'
                            ></Input>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme={'red'}
                            mr={3}
                            onClick={() => toastCompartilhou(
                                {
                                    title: 'Encaminhado com sucesso',
                                    status: 'success',
                                    isClosable: true,
                                }
                            )}
                        >
                            Enviar
                        </Button>
                        <Button
                            onClick={onClose}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default PostPadroes