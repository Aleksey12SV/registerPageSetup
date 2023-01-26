import InputField from "./InputField";
import "./Form.scss"
function Form(){
    return (
        <form className="form">
        <InputField type="input" name="fullname"/>
        <InputField type="email" name="email"/>
        <InputField type="password" name="password"/>
        <button className="submit_btn" type="submit"><p className="submitText">Create Account</p></button> 
      </form>
    )
}
export default Form;