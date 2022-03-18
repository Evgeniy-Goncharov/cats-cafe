import styled from "styled-components";
import { VisuallyHiddenInput } from "../../styled";

const Label = styled.label`
    display: block;
`;

export default function RadioButton ({
    value,
    selectValue,
    name,
    onChange,
    labelComponent,
    text,
    ...props
}) {
    const isChecked = value === selectValue;
    const LabelComponent = labelComponent;

    return (
        <Label>
            <VisuallyHiddenInput 
                value={value}
                checked={isChecked}
                name={name}
                onChange={onChange}
                type='radio'
                {...props}
            />
            <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
        </Label>
    )
};