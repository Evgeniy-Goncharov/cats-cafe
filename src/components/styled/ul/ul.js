import styled from "styled-components";
import { css } from "styled-components";

const gridList = css`
    margin-right: ${props => -props.indent || -20}px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;

    li {
        margin-right: ${props => props.indent || 20}px;
    }
`;

const Ul = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    ${props => props.$isGridList ? gridList : ''}
`;

export default Ul;