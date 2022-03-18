import styled from "styled-components";
import { Swiper } from "swiper/react";
import "swiper/css";
import Button from "../../ui/button/button";
import arrowLeft from './../../../assets/icons/arrow-left.svg';
import arrowRight from './../../../assets/icons/arrow-right.svg';

export const StyledSwiper = styled(Swiper)`
    width: 726px;
    height: 408px;
    margin-bottom: ${props => props.theme.indent};
    margin-top: 64px;
    border-radius: ${props => props.theme.indent};
`;

export const StyledSlide = styled.img`
    display: block;
    border-radius: 20px;
`;

export const PreviewWrapper = styled.div`
    position: relative;
`; 

export const SwiperPreview = styled(Swiper)`
    width: 726px;
    border-radius: 12px;
`;

export const PreviewSlide = styled.img`
    object-fit: cover;
    border-radius: 12px;
    filter: brightness(${props => props.$active ? 100 : 50}%);
    
`;

export const NavigationButtonLeft = styled(Button)`
    left: 93px;
    background-image: url(${arrowLeft});
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    min-width: 64px;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    
    &:hover {
        box-shadow: none;
    }
`;

export const NavigationButtonRight = styled(NavigationButtonLeft)`
    right: 93px;
    left: auto;
    background-image: url(${arrowRight});
`;