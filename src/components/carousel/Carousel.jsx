import { Box, Image } from "@chakra-ui/react"
import Slider from 'infinite-react-carousel'

import { Link } from "react-router-dom"

const Carousel = ({ avatars }) => {

    const settings = {
        arrows: true,
        arrowsBlock: true,
        duration: 100,
        initialSlide: 0,
        overScan: 1,
        pauseOnHover: false,
        slidesToShow: 5,
    }

    return (
        <Box
            w={'80%'}    
            m={'5% 10%'}
        >
            <Slider
                {...settings}
            >
                <Box
                    as="button"
                >
                    <Link to={'/user1'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[0]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user2'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[1]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user3'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[2]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user4'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[3]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user5'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[4]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user3'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[2]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
                <Box
                    as="button"
                >
                    <Link to={'/user4'}>
                        <Image
                            borderRadius={'full'}
                            src={avatars[3]}
                            alt='rosto de uma pessoa'
                            width={'200px'}
                        />
                    </Link>
                </Box>
            </Slider>
        </Box>
    )
}

export default Carousel