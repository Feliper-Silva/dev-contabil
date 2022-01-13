import React from 'react';
import Form from './form';

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 58px;
  color: #fff;
  position: relative;
  top: 280px;
  margin-left: 35px;
`;
const Main = () => {
  return (
    <div>
      <Title>Dev Contábil</Title>
      <Form />
    </div>
  );
};

export default Main;
