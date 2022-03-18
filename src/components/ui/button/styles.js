import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
    box-sizing: border-box;
    min-width: ${(props) => props.$minWidth || 260}px;
    min-height: 60px;
    padding: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${props => props.theme.colorForButton};
    border-radius: 5px;
    border: none;
    color: ${props => props.theme.colorWhite};
    font-weight: bold;
    font-size: ${props => props.theme.fontSizeDefault};
    line-height: 150%;
    cursor: pointer;
    text-decoration: none;
    box-shadow: none;
    transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;

    &:hover,
    &:active {
        background-color: ${props => props.theme.colorForButtonHover};
        box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
    }

    &:active {
        box-shadow: none;
    }
`;