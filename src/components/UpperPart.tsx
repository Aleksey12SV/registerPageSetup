import SignUpButton from "./SignUpButton";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import "./UpperPart.scss";

function UpperPart() {
  const companies = [google, facebook];
  const listButtons = companies.map((company) => {
    const file = company.split("/");
    const imageName = file[file.length-1].split(".")[0];
    return (
      <SignUpButton
        key={company}
        image={company}
        name={imageName}
      />
    );
  });
  return (
    <>
      <h2 className="title">Create Account</h2>
      <div className="sign">{listButtons}</div>
      <p className="or">-OR-</p>
    </>
  );
}
export default UpperPart;
