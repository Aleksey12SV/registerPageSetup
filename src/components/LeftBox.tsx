import backgroundImage from "../images/3Dicon.png";
import logo from "../images/logo.png";
import Image from "./Image";
import "./LeftBox.scss"

function LeftBox() {
  return (
    <div className="box">
      <Image image={backgroundImage} name="backgroundImage" />
      <Image image={logo} name="logo" />
      <p className="bgText">Find 3D Objects, Mockups and Illustration here</p>
    </div>
  );
}
export default LeftBox;
