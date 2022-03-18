import { AppRoute } from "../../../const";
import { Ul } from "../../styled";
import Button from "../../ui/button/button";
import { HomeButton } from "./styles";

export default function Nav ({ pageUrl }) {
    const links = [
        {
            to: AppRoute.MAIN,
            item: <HomeButton to={AppRoute.MAIN}>Главная</HomeButton>
        },
        {
            to: AppRoute.BUY,
            item: <Button link={AppRoute.BUY}>Купить билет</Button>
        }
    ];

    return (
        <nav>
            <Ul>
                {links
                    .filter(link => link.to !== pageUrl)
                    .map(link => (
                        <li key={link.to}>
                            {link.item}
                        </li>
                    ))
                }
            </Ul>
        </nav>
    )
}