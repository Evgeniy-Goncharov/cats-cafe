import styled from "styled-components";

export const Link = styled.a`
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 28px;
    line-height: 115%;
    text-decoration: none;
    color: ${props => props.theme.colorBlackForText};
`;

export const LogoImage = styled.img`
    width: 44px;
    height: 44px;
    margin-right: 10px;
`;