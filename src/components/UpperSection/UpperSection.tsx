import SignUpButton from '../SignUpButton/SignUpButton';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import './UpperSection.scss';
import Wrapper from '../Wrapper/Wrapper';

function UpperSection() {
  const companies = [google, facebook];
  const listButtons = companies.map((company) => {
    const file = company.split('/');
    const imageName = file[file.length - 1].split('.')[0];
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
      <Wrapper cssName='sign'>{listButtons}</Wrapper>
      <p className="or">-OR-</p>
    </>
  );
}
export default UpperSection;
