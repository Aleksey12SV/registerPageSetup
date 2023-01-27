import './LowerSection.scss';
import Form from '../Form/Form';
import Wrapper from '../Wrapper/Wrapper';

function LowerPart() {
  return (
    <Wrapper cssName='div'>
      <Form />
      <a href="#top" className="last">
        Already have an account? Log in
      </a>
    </Wrapper>
  );
}
export default LowerPart;
