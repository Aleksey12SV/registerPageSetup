import './LowerSection.scss';
import Form from '../Form/Form';
import Wrapper from '../Wrapper/Wrapper';

function LowerPart() {
  const handleClick = () => {
    window.alert('Login');
  };
  return (
    <Wrapper cssName="div">
      <Form />
      <a href="#top" className="last" onClick={handleClick}>
        Already have an account? Log in
      </a>
    </Wrapper>
  );
}
export default LowerPart;
