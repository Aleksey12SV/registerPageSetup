import { ChangeEventHandler } from 'react';
import styles from './InputField.module.scss';

interface IProps {
  type: string | undefined;
  name: string;
  accountInfo: { fullname: string, email: string, password: string, };
  onChange: ChangeEventHandler;
}

function InputField({
  type, name, accountInfo, onChange,
}: IProps) {
  const firstLetter = name?.charAt(0).toUpperCase();
  const restWord = name?.slice(1);
  const value = accountInfo[name as keyof typeof accountInfo];

  let capitalized = name ? (firstLetter || 'u') + (restWord || 'ndefined') : 'Error';
  if (capitalized === 'Email') capitalized = 'Email Address';
  return (
    <>
      <input
        className={styles.form__field}
        type={type}
        id={name}
        name={name}
        placeholder={name}
        value={value}
        onChange={onChange}
        required
      />
      <label htmlFor={name} className={styles.form__label}>
        {capitalized}
      </label>
    </>
  );
}
export default InputField;
