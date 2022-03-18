import styled, { css } from "styled-components";

const Form = styled.form`
    padding: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.colorWhite};
    box-sizing: border-box;
    ${props => props.$width && css`width: ${props.$width}px`};
`;

export default Form;