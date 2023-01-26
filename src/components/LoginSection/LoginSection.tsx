import LowerPart from '../LowerSection/LowerSection';
import UpperPart from '../UpperSection/UpperSection';
import arrow from '../../assets/arrow_down.png';
import Image from '../Image/Image';
import './LoginSection.scss';

function LoginSection() {
  const handleClick = () => {
    window.alert('Add dropdown!');
  };
  return (
    <div className="loginSection">
      <div className="language">
        <a href="#top">English(UK)</a>
        <Image image={arrow} name="arrow" onClick={handleClick} />
      </div>
      <UpperPart />
      <LowerPart />
    </div>
  );
}
export default LoginSection;
