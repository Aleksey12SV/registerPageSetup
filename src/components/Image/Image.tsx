/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Image.scss';

interface IProps {
  image: string | undefined,
  name: string | undefined,
  // eslint-disable-next-line react/require-default-props
  onClick?: React.MouseEventHandler<HTMLImageElement>,
}
function Image({ image, name, onClick }: IProps) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img className={name} src={image} alt={name} onClick={onClick} />
  );
}
export default Image;
