import LowerPart from "./LowerPart";
import UpperPart from "./UpperPart";
import arrow from "../images/arrow_down.png";
import Image from "./Image";
import "./LoginSection.scss"

function LoginSection() {
  return (
    <div className="loginSection">
      <div className="language">
        <a href="#">English(UK)</a>
        <Image image={arrow} name="arrow" />
      </div>
      <UpperPart />
      <LowerPart />
    </div>
  );
}
export default LoginSection;
