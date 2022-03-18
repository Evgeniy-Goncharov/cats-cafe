import { Ul } from "../../styled";
import { StyledLi } from './styles';
import AccordionItem from "./accordion-item";
import { useState } from 'react';

export default function Accordion ({ 
    titleComponent,
    textComponent,
    content,
    isHTML
}) {
    const [openItemIndex, setOpenItemIndex] = useState(null);

    return (
        <Ul>
            {content.map((item, index) => (
                <StyledLi key={item.id}>
                    <AccordionItem 
                        titleComponent={titleComponent}
                        textComponent={textComponent}
                        title={item.title}
                        text={item.description}
                        ticket={item}
                        open={index === openItemIndex}
                        onClick={() => setOpenItemIndex(index !== openItemIndex ? index : null)}
                        isHTML={isHTML}
                    />
                </StyledLi>
            ))}
        </Ul>
    )
}