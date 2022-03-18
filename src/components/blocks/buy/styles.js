import styled, { css } from "styled-components";
import { Section } from "../../styled";
import Title from "../../ui/title/title";
import bgCat from './../../../assets/bg/buy--cat.svg';
import bgCloud from './../../../assets/bg/buy--cloud.svg';

export const BuySection = styled(Section)`
    background-color: ${props => props.theme.colorForLightBackground};
    background-image: url(${bgCloud}), url(${bgCat});
    background-repeat: no-repeat;
    background-position: bottom left, center right;
`;

export const StyledTitle = styled(Title)`
    margin-bottom: 24px;
`;

export const FormItem = styled.div`
    margin-bottom: ${props => props.$bottom || 24}px;
`;

export const Price = styled.span`
  display: block;
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 27px;
  font-weight: 700;
`;

export const RadioLabelForTime = styled.span`
    display: inline-flex;
    width: 44px;
    min-height: 44px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 5px 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => props.theme.colorWhite};
    ${props => 
        props.$isChecked 
        ? css`
            background-color: ${props.theme.colorForButton};
            color: ${props.theme.colorWhite};
        `
        : css`
            background-color: ${props.theme.colorForRadioButton};
            color: ${props.theme.colorBlackForText};
        `
    };
`;

export const RadioLabelForType = styled.span`
    padding-left: 26px;
    position: relative;
    cursor: pointer;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: 1px solid ${props => props.theme.colorForButton};
        border-radius: 50%;
        margin: auto;
    }

    ${props => props.$isChecked
        && css`
            &::after {
                content: "";
                position: absolute;
                top: 0;
                bottom: 0;
                left: 3px;
                margin: auto;
                width: 12px;
                height: 12px;
                background-color: ${props => props.theme.colorForButton};
                border-radius: 50%;
            }
        `}
`;

export const AccordionText = styled.div`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    padding: 0;
    margin-left: 15px;
  }

  & li {
    list-style-type: disc;
  }
`;