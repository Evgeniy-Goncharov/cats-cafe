import { Link } from "react-router-dom";
import styled from 'styled-components';

export const HomeButton = styled(Link)`
    color: ${props => props.theme.colorBlackForText};
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
`;