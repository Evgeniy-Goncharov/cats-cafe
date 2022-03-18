import styled from "styled-components";

export const Card = styled.article`
    min-height: 525px;
    height: 100%;
    width: 353px;
    padding: ${props => props.theme.indent};
    border-radius: 12px;
    background: ${props => props.theme.colorWhite};
    box-sizing: border-box;
    text-align: left;
`;

export const Figure = styled.figure`
    position: relative;
    margin: 0;
    margin-bottom: 10px;
`;

export const StarImage = styled.img`
    width: 100%;
    height: 313px;
    object-fit: contain;
    border-radius: 8px;
`;

export const Text = styled.p`
    margin-top: 7px;
    margin-bottom: 0;
`;