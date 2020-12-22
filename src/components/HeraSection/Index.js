import React,{useState} from 'react'
import Video from '../../videos/video.mp4';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroP,HeroBtnWrapper,ArrowRight,ArrowForward,Heroh1} from ./HeroElements';

const HeroSection = () => {
    const [hover,setHover]=useState(false)
    const onHover =()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
                </HeroBg>
                <HeroContent>
                    <Heroh1>
                        This is Mr 305 Site
                    </Heroh1>
                    <HeroP>
                        He is cuba from track 18,If you know old pit then you know I mean
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onhover}>
                          Don't Stop the Party   {hover ? <ArrowFormard /> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
        </HeroContainer>
            
        
    )
}

export default Hero
