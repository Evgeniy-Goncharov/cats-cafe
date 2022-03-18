import styled from "styled-components";
import { Section } from "./../../styled";

export const PageFooter = styled(Section)`
    padding: 0 ${props => props.theme.pagePadding};
    height: ${props => props.theme.footerHeight};
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colorWhite};
    align-items: center;  
`;

export const Copy = styled.span`
    min-height: 43px;
    min-width: 148px;
    max-width: 700px;
    padding: 8px 12px;
    font-size: ${props => props.theme.fontSizeDefault};
    background: ${props => props.theme.colorForLightBackground};
    border-radius: 5px;
    text-align: center;
    box-sizing: border-box;
`;