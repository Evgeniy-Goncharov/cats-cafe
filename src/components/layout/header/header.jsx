import { PageHeader } from "./styles";
import Logo from "./../../ui/logo/logo";
import Nav from "./../nav/nav";

export default function Header ({ pageUrl }) {
    return (
        <PageHeader as='header'>
            <Logo />
            <Nav pageUrl={pageUrl} />
        </PageHeader>
    )
}