import { Copy, PageFooter } from "./styles";
import Logo from "./../../ui/logo/logo";

export default function Footer () {
    return (
        <PageFooter as='footer'>
            <Logo />
            <Copy>Создано 2021</Copy>
        </PageFooter>
    )
}