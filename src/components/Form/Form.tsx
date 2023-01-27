import { SyntheticEvent, useState } from 'react';
import InputField from '../InputField/InputField';
import './Form.scss';

function Form() {
  const [accountInfo, setAccountInfo] = useState(
    { fullname: '', email: '', password: '' },
  );
  const handleChange = (event: React.ChangeEvent<Element>) => {
    const target = event.target as HTMLInputElement;
    setAccountInfo({ ...accountInfo, [target?.name]: target?.value });
  };

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    console.log(accountInfo);
    window.alert(JSON.stringify(accountInfo));
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputField
        type="input"
        name="fullname"
        accountInfo={accountInfo}
        onChange={handleChange}
      />
      <InputField
        type="email"
        name="email"
        accountInfo={accountInfo}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        accountInfo={accountInfo}
        onChange={handleChange}
      />
      <button className="submit_btn" type="submit">
        <p className="submitText">Create Account</p>
      </button>
    </form>
  );
}
export default Form;
