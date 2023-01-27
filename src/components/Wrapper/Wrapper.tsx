import './Wrapper.scss';

type Props = {
  children: string | JSX.Element | JSX.Element[],
  cssName: string
};
export default function Wrapper({ children, cssName }: Props) {
  return (
    <div className={cssName}>
      {children}
    </div>
  );
}
