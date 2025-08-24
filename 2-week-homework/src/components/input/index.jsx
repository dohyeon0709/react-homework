export default function Input({ type }) {
    let placeHolder;

    switch (type) {
        case "email":
            placeHolder = "아이디(이메일)";
            break;
        case "password":
            placeHolder = "비밀번호";
            break;
    }

    return (
        <>
            <input type="text" placeholder={placeHolder} />
        </>
    );
}
