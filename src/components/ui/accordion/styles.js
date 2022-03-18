import styled from "styled-components";
import { css } from "styled-components";
import { Li } from "../../styled";
import iconArrow from './../../../assets/icons/arrow.svg';

export const StyledLi = styled(Li)`
    margin-bottom: 12px;
`;

export const TitleWrapper = styled.div`
    background-color: ${props => props.theme.colorGray};
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    min-height: 48px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    border: none;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: ${props => props.theme.colorBlackForText};
    cursor: pointer;
    background: transparent url(${iconArrow}) no-repeat center;
    background-size: 16px 10px;
    width: 16px;
    height: 16px;
    padding: 0;
    box-sizing: border-box;
    transition: transform 0.2s ease-out;

    ${props => props.$open 
        && css`
            transform: rotate(180deg);
        `}
`;

export const Wrapper = styled.div`
    position: relative;
    overflow: hidden;
    height: ${props => props.open ? props.height : 0}px;
    padding-top: 10px;
    margin-top: -11px;
    background-color: ${props => props.theme.colorGray};
    border-radius: 0 0 10px 10px;
    transition: height 0.2s ease-out;
`;

export const ContentWrapper = styled.div`
    position: absolute;
    bottom: 0;
    padding: 20px;
    padding-top: 10px;
    box-sizing: border-box;
`;