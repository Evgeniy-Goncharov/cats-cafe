import styled from "styled-components";
import { Section } from "../../styled";
import pawBg from './../../../assets/bg/gallery--paw.svg';
import leafBg from './../../../assets/bg/gallery--leaf.svg';

export const GallerySection = styled(Section)`
    background-color: ${props => props.theme.colorForDarkBackground};
    padding-top: 79px;
    background-image: url(${pawBg}), url(${leafBg});
    background-repeat: no-repeat;
    background-position: top right, bottom left;
    text-align: center;
`;





