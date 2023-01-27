import backgroundImage from '../../assets/3Dicon.png';
import logo from '../../assets/logo.png';
import Image from '../Image/Image';
import Wrapper from '../Wrapper/Wrapper';
import './LeftBox.scss';

function LeftBox() {
  return (
    <Wrapper cssName="box">
      <Image image={backgroundImage} name="backgroundImage" />
      <Image image={logo} name="logo" />
      <p className="bgText">Find 3D Objects, Mockups and Illustration here</p>
    </Wrapper>
  );
}
export default LeftBox;
