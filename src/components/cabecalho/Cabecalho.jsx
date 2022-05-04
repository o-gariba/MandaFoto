import * as React from 'react'

import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react"
import { Fragment } from "react"


const Cabecalho = ({user}) => {
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
                backgroundColor={'gray.500'}
            >

                <Image
                    src={user}
                    alt="avatar do usuário atual"
                    borderRadius={'full'}     
                    boxSize='100px'
                />
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
                // finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Qual foto gostaria de postar?</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={4}>
                        <FormControl>
                            <FormLabel>URL da img</FormLabel>
                            <Input ref={initialRef} placeholder="Ex: https://url-da-sua-img.com" />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme={'red'} mr={3} 
                            onClick={() => 
                                toast(
                                    {title: 'success toast', status: 'success', isClosable: true,
                                    }
                                )
                            }
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