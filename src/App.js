import './App.css';
import Header from './components/header';
import Main from './components/main';
import Services from './components/services';
import About from './components/about';

import styled from 'styled-components';

const UpperCase = styled.div`
  background-image: url('/img/dev.png');
  height: 90vh;
  background-size: cover;
  background-position: center;
`;

function App() {
  return (
    <>
      <UpperCase>
        <Header />
        <Main />
      </UpperCase>
      <Services />
      <About />
    </>
  );
}

export default App;
