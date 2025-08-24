import { ICON_PATHS, ICON_TYPES } from "./const";

export default function Icon({ type, size = 45, color = "#CCCCCC" }) {
    const paths = ICON_PATHS[type];

    return (
        <svg width={size} fill="none" viewBox="0 0 45 50">
            {type === ICON_TYPES.ICON_HIDE || type === ICON_TYPES.ICON_SHOW ? (
                <circle cx="22" cy="25" r="9.5" fill="#AAA9A9" />
            ) : null}

            {paths.map((d, index) => (
                <path
                    key={index}
                    fill={color}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={d}
                />
            ))}
        </svg>
    );
}
