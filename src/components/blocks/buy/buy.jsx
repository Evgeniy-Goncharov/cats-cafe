import { Form, Label, Li, Ul } from "../../styled";
import { TitleSize } from "../../ui/title/title";
import { 
    BuySection, 
    FormItem, 
    Price, 
    RadioLabelForTime, 
    RadioLabelForType,
    StyledTitle,
    AccordionText
} from "./styles";
import Button from './../../ui/button/button';
import RadioButton from "../../ui/radio-button/radio-button";
import { useState } from "react";
import Accordion from "../../ui/accordion/accordion";

export default function Buy ({ 
    buyOptions: { durationOptions = [], ticketOptions = [] }
}) {
    const canBuy = durationOptions.length && ticketOptions.length;
    const [duration, setDuration] = useState(durationOptions[0]);
    const [selectType, setSelectType] = useState(ticketOptions[0].id);

    const accordionContent = ticketOptions.map(option => ({
        id: option.id,
        title: (
            <RadioButton 
                labelComponent={RadioLabelForType}
                selectValue={selectType}
                value={option.id}
                text={option.title}
                onChange={e => setSelectType(Number(e.target.value))}
            />
        ),
        description: option.description
    }));

    const type = ticketOptions.find(option => option.id === selectType);
    const price = duration * type.price;

    const handleBuy = () => {
        alert(
            `Спасибо за покупку.
            Вы приобрели билет класса:
            ${type.title}.
            Продолжительность 
            посещения (часов): ${duration}.
            Цена билета: ${price} руб.`
        );
    }

    return (
        <BuySection>
            <StyledTitle level={2} size={TitleSize.BIG}>
                Купить билет
            </StyledTitle>
            {canBuy ? (<Form $width={540}>
                <FormItem>
                    <Label $margin={12}>Продолжительность (часов)</Label>
                    <Ul $isGridList indent={12}>
                        {durationOptions.map((option, index) => (
                            <Li key={option}>
                                <RadioButton
                                    value={option}
                                    selectValue={duration}
                                    name={option}
                                    onChange={el => 
                                        setDuration(Number(el.target.value))
                                    }
                                    labelComponent={RadioLabelForTime}
                                    text={option}
                                />
                            </Li>
                        ))}
                    </Ul>
                </FormItem>
                <FormItem $bottom={22}>
                    <Label $margin={12}>Тип билета</Label>
                    <Accordion 
                        textComponent={AccordionText}
                        content={accordionContent} 
                        isHTML
                    />
                </FormItem>
                <Label $margin={6} $small>Цена</Label>
                <Price>{price}</Price>
                <Button minWidth={460} onClick={handleBuy}>Купить билет</Button>
            </Form>) : (
                <p>Покупка билетов временно недоступна</p>
            )}
        </BuySection>
    );
}