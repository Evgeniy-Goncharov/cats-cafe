import { Icon } from "./styles";

export const CatFeature = {
    NEW: 'new',
    SOFT: 'soft'
}

export default function StarIcon ( { className="", feature }) {
    let options;

    switch (feature) {
        case CatFeature.NEW:
            options = {
                text: "New",
                bgColor: `${props => props.theme.colorForNewIcon}`
            };
            break;
        case CatFeature.SOFT:
            options = {
                text: "Ласковый",
                bgColor: `${props => props.theme.colorForSoftIcon}`
            };
            break;
        default:
            options = {
                text: "",
                bgColor: '#000'
            };
            break;
    }

    return options.text ? (
        <Icon
            className={className}
            style={{ backgroundColor: options.bgColor }}
        >
            {options.text}
        </Icon>
    ) : null;
}