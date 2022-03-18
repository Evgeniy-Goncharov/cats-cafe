import Title, { TitleLevel, TitleSize } from "../title/title";
import { Card, Figure, StarImage } from "./styles";
import StarIcon from "../staricon/star-icon";

export default function StarCard ({
    name,
    about,
    feature,
    image
}) {
    return (
        <Card>
            <Figure>
                <StarImage 
                    src={image}
                    width={313}
                    height={320}
                    alt="изображение кота"
                />
                <StarIcon feature={feature} />
            </Figure>
            <Title size={TitleSize.SMALL} level={TitleLevel.H3}>{name}</Title>
            <p dangerouslySetInnerHTML={{ __html: about }}/>
        </Card>
    )
}