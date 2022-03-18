import styled from "styled-components";

const Section = styled.section`
    padding: 100px ${props => props.theme.pagePadding};
    box-sizing: border-box;
    margin: 0 auto;
    width: ${props => props.theme.pageWidth};
`;

export default Section;