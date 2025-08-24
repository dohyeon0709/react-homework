import Logo from "./components/logo";
import Icon from "./components/icon";
import Tooltip from "./components/tooltip";
import Button from "./components/button";
import Input from "./components/input";

export default function App() {
    return (
        <>
            <section>
                <h2 className="text-2xl">로고</h2>
                <Logo />
                <Logo type="mono" />
                <Logo type="black" />
            </section>
            <br />
            <hr />
            <br />
            <section>
                <h2 className="text-2xl">아이콘</h2>
                <Icon type="email" size={45} />
                <Icon type="password" size={45} />
                <Icon type="hide" size={45} color="#fff" />
                <Icon type="show" size={45} color="#fff" />
            </section>
            <br />
            <hr />
            <br />
            <section>
                <h2 className="text-2xl">툴팁</h2>
                <Tooltip />
            </section>
            <br />
            <br />
            <hr />
            <br />
            <section>
                <h2 className="text-2xl">버튼</h2>
                <Button type="disable" />
                <br />
                <Button type="enable" />
            </section>
            <br />
            <hr />
            <br />
            <section>
                <h2 className="text-2xl">인풋</h2>
                <Input type="email" />
                <Input type="password" />
            </section>
        </>
    );
}
