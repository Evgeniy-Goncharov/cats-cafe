import styled from "styled-components";
import { TitleSize } from "./title";

const StyledTitle = styled.h1`
    margin: 0;
    padding: 0;
    font-weight: 700;
    line-height: 115%;
    font-size: ${props => {
        switch (props.$size) {
            case TitleSize.BIG:
                return '44px';
            case TitleSize.SMALL:
                return '28px';
            default:
                return '36px';
        }
    }}
`;

export default StyledTitle;