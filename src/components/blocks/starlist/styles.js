import styled from "styled-components";
import { Ul, Section } from "../../styled";
import bgPaw from "./../../../assets/bg/star-list--paw.svg";
import bgCloud from "./../../../assets/bg/star-list--cloud.svg";
import bgLeaf from "./../../../assets/bg/star-list--leaf.svg";

export const StarListSection = styled(Section)`
    text-align: center;
    background-color: ${props => props.theme.colorForDarkBackground};
    background-image: url(${bgPaw}),
    url(${bgCloud}),
    url(${bgLeaf});
    background-repeat: no-repeat;
    background-position: top left, bottom left, bottom right;
`;

export const List = styled(Ul)`
  margin-top: 44px;
  margin-bottom: 44px;
`;