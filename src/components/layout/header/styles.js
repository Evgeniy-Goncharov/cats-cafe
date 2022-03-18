import styled from "styled-components";
import { Section } from "./../../styled";

export const PageHeader = styled(Section)`
    padding: 0 ${props => props.theme.pagePadding};
    height: ${props => props.theme.footerHeight};
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colorWhite};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.04), 0 0 2px rgba(0, 0, 0, 0.06),
    0 0 1px rgba(0, 0, 0, 0.04);
    align-items: center;
`