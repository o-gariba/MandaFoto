import { Flex, Image, Text } from "@chakra-ui/react"
import { Fragment } from "react"
import PostArea from "../postArea/PostArea"
import PostImagem from "../postImagens/PostImagem"

const PerfilUser = ({ users }) => {
    return (
        <Fragment>
            <Flex
                m={'5% 3%'}
                justify={'center'}
                gap='4%'
            >
                <Image
                    borderRadius={'full'}
                    boxSize='100%'
                    maxWidth={'300px'}
                    maxHeight={'300px'}
                    src={users}
                />
                <Flex 
                    direction={'column'}
                    paddingTop='15px'
                >
                    <Text
                        fontSize={'3xl'}
                        marginBottom='5%'
                    >
                        @usuarioPronto
                    </Text>

                    <Flex
                        fontSize={'xl'}
                        gap='5%'
                        marginBottom='5%'
                    >
                        <Text>
                            6 posts
                        </Text>
                        <Text>
                            1321 followers
                        </Text>
                        <Text>
                            321 following
                        </Text>
                    </Flex>

                    <Text
                        fontSize={'xl'}
                    >
                        Pedro Teste
                    </Text>
                    <Text
                        maxWidth={'800px'}
                    >
                        Bio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum reiciendis ratione necessitatibus alsfkdjfhlkasufeyoiuashdflk asdjbfliaseue hflkjsadhgf kjahsflk sdajhfhsilaudfy cxvlkj
                    </Text>

                </Flex>
            </Flex>
            <PostArea>
                <PostImagem />
                <PostImagem />
                <PostImagem />
                <PostImagem />
                <PostImagem />
                <PostImagem />
            </PostArea>
        </Fragment>
    )
}

export default PerfilUser
