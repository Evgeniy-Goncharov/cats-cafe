import styled from "styled-components";
import Section from "../../styled/section/section";
import aboutBg from "../../../assets/bg/about-bg.svg";

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const AboutSection = styled(Section)`
    padding: 159px 603px 159px ${props => props.theme.pagePadding};
    background-color: ${props => props.theme.colorForLightBackground};
    background-image: url(${aboutBg});
    background-repeat: no-repeat;
    background-position: center right 90px;
    background-size: 446px 446px;
`;

export const Text = styled(Paragraph)`
  margin-top: 20px;
  padding-right: 122px;
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
    display: inline-block;
    min-height: 43px;
    min-width: 292px;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 8px;
    background-color: #ffeead;
`;

export const Address = styled(Paragraph)`
  
  &::before {
      content: "";
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-right: 10px;
      background: url("https://evgeniy-goncharov.github.io/cloud/cats-cafe/logos/address.svg") no-repeat center;
      background-size: 16px 16px;
  }
`;