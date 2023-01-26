import styles from "./InputField.module.scss";

function InputField(props: {
  type: string | undefined;
  name: string | undefined;
}) {
  let capitalized = props.name
    ? props.name?.charAt(0).toUpperCase() + props.name?.slice(1)
    : "Error";
  if (capitalized === "Email") capitalized = "Email Address";
  return (
    <>
      <input
        className={styles.form__field}
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.name}
        required
      ></input>
      <label htmlFor={props.name} className={styles.form__label}>
        {capitalized}
      </label>
    </>
  );
}
export default InputField;
