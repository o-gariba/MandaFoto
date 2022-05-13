import * as React from 'react'

import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Cabecalho = ({ logo, criarPost }) => {

    const [urlAvatar, setUrlAvatar] = React.useState('')
    const [usuario, setUsuario] = React.useState('')
    const [imgPost, setImgPost] = React.useState('')
    
    const { onOpen, isOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()

    const toast = useToast()

    return (

        <>
            <Box
                display={'flex'} 
                alignItems='center'
                justifyContent='space-around'
                p={3}
                width='100%'
                backgroundColor={'gray.400'}
            >
                <Link to={'/'}>
                    <Image
                        src={ logo }
                        alt="logo Postei"
                        width={'150px'}
                    />
                </Link>
                <Button
                    colorScheme={'red'}
                    size='lg'
                    onClick={onOpen}
                >
                    Publicar
                </Button>

            </Box>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Qual foto gostaria de postar?</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={4}>
                        <FormControl 
                        >

                            <FormLabel>URL do seu avatar</FormLabel>
                            <Input ref={initialRef} placeholder="Ex: https://url-da-sua-img.com" 
                                onChange={(dado) => setUrlAvatar(dado.target.value)} 
                            />

                            <FormLabel>Usuário</FormLabel>
                            <Input placeholder="seu_nickname" 
                                onChange={(dado) => setUsuario(dado.target.value)}
                            />

                            <FormLabel>URL da img a ser postada</FormLabel>
                            <Input placeholder="Ex: https://url-da-sua-img.com" 
                                onChange={(dado) => setImgPost(dado.target.value)}
                            />

                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button 
                            type='submit'
                            colorScheme={'red'}
                            mr={3} 
                            onClick={(e) => {
                                criarPost(urlAvatar, usuario, imgPost)
                                toast(
                                    {
                                        title: 'Publicado com sucesso',
                                        status: 'success',
                                        isClosable: true,
                                    }
                                )
                            }}
                        >
                            Postar
                        </Button>
                        <Button onClick={onClose}>
                            Cancelar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Cabecalho