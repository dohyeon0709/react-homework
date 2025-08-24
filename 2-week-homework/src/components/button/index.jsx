export default function Button({ type = "disable", message = "버튼" }) {
    let styleCasdlass;

    switch (type) {
        case "enable":
            styleCasdlass =
                "w-[342px] h-[53px] bg-[#0074E9] rounded-xs text-[#fff] cursor-pointer";
            break;
        case "disable":
            styleCasdlass =
                "w-[342px] h-[53px] bg-[#97AABD] rounded-xs text-[#D4E0ED] cursor-pointer";
            break;
    }

    return (
        <div>
            <button type="button" className={styleCasdlass}>
                {message}
            </button>
        </div>
    );
}
