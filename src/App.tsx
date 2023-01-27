import './App.scss';

import LeftBox from './components/LeftBox/LeftBox';
import LoginSection from './components/LoginSection/LoginSection';
import Wrapper from './components/Wrapper/Wrapper';

export function App() {
  return (
    <>
      <LeftBox />
      <LoginSection />
    </>
  );
}

function WrappedApp() {
  return (
    <Wrapper cssName="wrapper">
      <LeftBox />
      <LoginSection />
    </Wrapper>
  );
}

export default WrappedApp;
