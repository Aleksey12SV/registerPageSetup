import "./Image.scss";


function Image(props: { image: string | undefined, name: string | undefined}) {
  return (
    <>
      <img className={props.name} src={props.image} alt={props.name} />
    </>
  );
}
export default Image;
