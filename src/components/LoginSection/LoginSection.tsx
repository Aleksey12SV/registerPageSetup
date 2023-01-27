import LowerPart from '../LowerSection/LowerSection';
import UpperPart from '../UpperSection/UpperSection';
import arrow from '../../assets/arrow_down.png';
import Image from '../Image/Image';
import './LoginSection.scss';
import Wrapper from '../Wrapper/Wrapper';

function LoginSection() {
  const handleClick = () => {
    // eslint-disable-next-line no-alert
    window.alert('Add dropdown!');
  };
  return (
    <Wrapper cssName='loginSection'>
      <Wrapper cssName="language">
        <a href="#top">English(UK)</a>
        <Image image={arrow} name="arrow" onClick={handleClick} />
      </Wrapper>
      <UpperPart />
      <LowerPart />
    </Wrapper>
  );
}
export default LoginSection;
