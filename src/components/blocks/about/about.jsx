import Title, { TitleSize, TitleLevel } from "../../ui/title/title";
import { AboutSection, Address, Text, WorkTime } from "./styles";

export default function About() {
    return (
        <AboutSection>
            <Title size={TitleSize.BIG} level={TitleLevel.H1}>
                Первое в России котокафе
            </Title>
            <Text>
                Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
                из них ищет новый дом. Животных можно гладить, фотографировать, играть
                с ними.
            </Text>
            <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
            <Address>Санкт-Петербург, набережная реки Карповки, дом 5, литера П</Address>
        </AboutSection>
    );
};