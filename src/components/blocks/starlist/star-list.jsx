import { List, StarListSection } from "./styles";
import Title, { TitleLevel } from "../../ui/title/title";
import StarCard from "../../ui/starcard/star-card";
import Button from "../../ui/button/button";

export default function StarList ({stars}) {
    return (
        <StarListSection>
            {stars?.length ? (
                <>
                    <Title level={TitleLevel.H2}>Наши звезды</Title>
                    <List $isGridList>
                        {stars.map((star) => (
                            <li key={star.id}>
                                <StarCard {...star} />
                            </li>
                        ))}
                    </List>
                    <Button minWidth={353} link='/buy'>Купить билет</Button>
                </>
            ) : null}
        </StarListSection>
    )
}