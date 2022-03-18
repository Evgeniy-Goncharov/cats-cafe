import About from "../../blocks/about/about";
import StarList from "../../blocks/starlist/star-list";

export default function MainPage ({ stars }) {
    return (
        <>
            <About />
            <StarList stars={stars} />
        </>
    )
}