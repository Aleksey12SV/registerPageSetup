import "./SignUpButton.scss";

function SignUpButton(props: {
  image: string | undefined;
  name: string | undefined;
}) {

    function onClick(){
        window.alert(`Clicked ${props.name} button!`);
    } 
  return (
    <div className="rect">
      <button type='button' className="signButton" onClick={onClick}>
        <img className={props.name} src={props.image} alt={props.name} />
          <a className="signText">Sign up with {props.name ? props.name?.charAt(0).toUpperCase() + props.name?.slice(1) : "Error"}</a>
      </button>
    </div>
  );
}

export default SignUpButton;
