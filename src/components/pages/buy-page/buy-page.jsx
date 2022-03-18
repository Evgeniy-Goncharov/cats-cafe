import Buy from "../../blocks/buy/buy";
import CafeGallery from "../../blocks/cafe-gallery/cafe-gallery";

export default function BuyPage ({ gallery, buyOptions }) {
    return (
        <>
            <CafeGallery slides={gallery} />
            <Buy buyOptions={buyOptions}/>
        </>
    )
}