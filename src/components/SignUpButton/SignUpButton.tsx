import './SignUpButton.scss';

interface IProps {
  image: string | undefined;
  name: string | undefined;
}

function SignUpButton({
  image,
  name,
}: IProps) {
  function onClick() {
    // eslint-disable-next-line no-alert
    window.alert(`Clicked ${name} button!`);
  }
  const firstLetter = name?.charAt(0).toUpperCase();
  const restWord = name?.slice(1);
  return (
    <div className="rect">
      <button type="button" className="signButton" onClick={onClick}>
        <img className={name} src={image} alt={name} />
        <a href="#top" className="signText">
          Sign up with
          {' '}
          {firstLetter && restWord ? firstLetter + restWord : 'Undefined'}
        </a>
      </button>
    </div>
  );
}

export default SignUpButton;
