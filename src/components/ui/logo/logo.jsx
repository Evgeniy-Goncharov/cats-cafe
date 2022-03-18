import { Link, LogoImage } from "./styles";
import logo from "./../../../assets/logos/logo.svg";

export default function Logo () {
    return (
        <>
            <Link>
                <LogoImage src={logo} alt="Логотип" width='44' height='44' />
                <span>Котокафе</span>
            </Link>
        </>
    )
}