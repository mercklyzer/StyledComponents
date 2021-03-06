import React from 'react'
import {Link} from 'react-router-dom'
import {InfoSec, InfoRow, InfoColumn, TextWrapper,
        TopLine, Heading, Subtitle, ImageWrapper, Img

} from './InfoSection.elements'
import {Container, Button} from '../../globalStyles'


const InfoSection = ({lightBg, imgStart, lightTopLine, lightText, lightTextDesc, topLine, headline, description, buttonLabel, primary, start, img, alt}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lighTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImageWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImageWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>


        </>
    )
}

export default InfoSection
