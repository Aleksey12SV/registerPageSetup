import './Image.scss';

interface IProps {
  image: string | undefined,
  name: string | undefined,
}
function Image({ image, name }: IProps) {
  return (
    <img className={name} src={image} alt={name} />
  );
}
export default Image;
