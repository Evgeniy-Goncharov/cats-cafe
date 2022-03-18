import { useEffect, useRef, useState } from "react";
import { TitleWrapper, Button, Wrapper, ContentWrapper, TextComponent } from "./styles";

export default function AccordionItem ({
    titleComponent,
    textComponent,
    title,
    text,
    open,
    isHTML,
    onClick,
}) {
    const [height, setHeight] = useState(0);
    const TitleComponent = titleComponent;
    const TextComponent = textComponent || 'div';
    const contentWrapper = useRef(null);

    useEffect(() => setHeight(contentWrapper.current.offsetHeight), [text]);

    return (
        <>
            <TitleWrapper>
                {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
                <Button
                    type='button'
                    title={`${open ? 'Скрыть' : 'Раскрыть'} описание`}
                    onClick={onClick}
                    $open={open}
                />
            </TitleWrapper>
            <Wrapper height={height} open={open}>
                <ContentWrapper ref={contentWrapper}>
                    {isHTML ?
                    <TextComponent dangerouslySetInnerHTML={{__html: text}} />
                    : <TextComponent>{text}</TextComponent>}
                </ContentWrapper>
            </Wrapper>
        </>
    )
}