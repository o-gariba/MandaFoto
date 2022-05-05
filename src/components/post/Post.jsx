import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react"
// import { StarIcon, ExternalLinkIcon, ChatIcon, AddIcon } from '@chakra-ui/icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsBookmarkHeart, BsBookmarkHeartFill } from 'react-icons/bs'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiCommentDetail } from 'react-icons/bi'

// import avatarImagem from '../assets/post1.png'

// import imgAleatoria from 'https://picsum.photos/200'

const Post = () => {

    const propriedades = {
        imageURL: 'https://picsum.photos/300',
        imageAlt: 'lula',
        curtir: <Icon as={AiOutlineHeart} boxSize={5} />,
        comentar: <Icon as={BiCommentDetail} boxSize={5} />,
        compartilhar: <Icon as={IoPaperPlaneOutline} boxSize={5} />,
        salvar: <Icon as={BsBookmarkHeart} boxSize={5} />,
        autor: 'usuario1',
        autorImg: <Image borderRadius={'full'} boxSize='30px' src='https://picsum.photos/100' />,
        descricao: 'descrição do post',
    }

    return (
        <>
            <Box 
                maxW={'md'}
                borderWidth='2px'
                overflow={'hidden'}
                maxWidth='250px'
            >
                <Flex
                    // m={1}
                    p={1}
                    borderWidth='1px'
                    borderColor={'green'}
                    gap='10px'
                >
                    {propriedades.autorImg} {propriedades.autor}
                </Flex>
                <Image src={propriedades.imageURL} alt={propriedades.imageAlt} />     
                <Box 
                    p='1'
                    borderWidth={'1px'}
                    borderColor='blue'
                >
                    <Flex
                        ml={0}
                        borderWidth='1px'
                        borderColor={'red'}
                        gap='2'
                    >
                        <Button
                            variant={'unstyled'}
                            size='sm'
                        >
                            {propriedades.curtir}
                        </Button>
                        <Button
                            variant={'unstyled'}
                            size='sm'
                        >
                        {propriedades.comentar}
                        </Button>
                        <Button
                            variant={'unstyled'}
                            size='sm'
                        >
                        {propriedades.compartilhar}
                        </Button>

                        <Flex
                            ml={'auto'} 
                        >
                            <Button
                                variant={'unstyled'}
                                size='sm'
                            >
                                {propriedades.salvar}
                            </Button>
                        </Flex>

                    </Flex>

                    <Box>
                        {propriedades.descricao}
                    </Box>
                </Box>
            </Box> 
        </>
    )
}

export default Post
