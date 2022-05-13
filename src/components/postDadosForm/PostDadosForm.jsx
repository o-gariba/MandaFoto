import { Center, Box, Button, Flex, Icon, Image, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Textarea, useToast, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react"

import { ChatIcon } from '@chakra-ui/icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'

import { Fragment, useRef, useState } from "react"

const PostDadosForm = ({ posts }) => {

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
        const novoArrayComentario = [...comentarios, comentario]
        setComentarios(novoArrayComentario)
    }

    const { onOpen, isOpen, onClose } = useDisclosure()

    const initialRef = useRef()

    const toastCompartilhou = useToast()

    const propriedades = {
        curtir: qualIconCoracao(curtido),
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={8} />,
        salvar: qualIconSalvar(salvo),
        descricao: 'descrição do post',
    }

    return (
        <>
            {posts.map((post, index) => {
                return (
                    <Fragment>
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
                                    <Image borderRadius={'full'} boxSize='50px' src={post.imgAvatar} />
                                    <Text fontSize={'xl'}>
                                        {post.usuario}
                                    </Text>
                                </Flex>
                                <Image 
                                    src={post.imgPost} 
                                    alt={propriedades.imageAlt}
                                    boxSize='400'
                                />
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
                                                        <ChatIcon boxSize={'6'} />
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
                                                {propriedades.descricao}
                                            </Box>

                                            <AccordionPanel pb={2}>
                                                <form
                                                    onSubmit={(e) => {
                                                        e.preventDefault()
                                                        e.stopPropagation()
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
                                        onClick={(e) => toastCompartilhou(
                                            {
                                                title: 'Encaminhado com sucesso',
                                                status: 'success',
                                                isClosable: true,
                                            }
                                        )
                                        }
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
                    </Fragment>
                )
            })
            }
        </>
    )
}

export default PostDadosForm