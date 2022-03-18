import styled from "styled-components";

export const Icon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 43px;
  padding: 8px 16px;
  font-size: ${props => props.theme.fontSizeDefault};
  line-height: 27px;
  font-weight: 700;
  color: ${props => props.theme.colorWhite};
  box-sizing: border-box;
  border-radius: 8px 8px 8px 0;
  text-transform: uppercase;
  background-color: ${props => props.theme.colorForSoftIcon};
`;