import React from 'react';
import styled from 'styled-components';

const Services = () => {
  return (
    <>
      <Title>Nossos serviços</Title>
      <ServicesArea>
        <Card>
          <TitleCard>Contabilidade Completa</TitleCard>
          <UlList>
            <li>Primeiro item da lista</li>
            <li>Segundo item da lista</li>
            <li>Terceiro item da lista</li>
            <li>Quarto item da lista</li>
            <li>Quinto item da lista</li>
            <li>Sexto item da lista</li>
          </UlList>
        </Card>
        <Card>
          <TitleCard>Cuidamos do seu negócio</TitleCard>
          <UlList>
            <li>Primeiro item da lista</li>
            <li>Segundo item da lista</li>
            <li>Terceiro item da lista</li>
            <li>Quarto item da lista</li>
            <li>Quinto item da lista</li>
            <li>Sexto item da lista</li>
          </UlList>
        </Card>
        <Card>
          <TitleCard>Cuidamos de Você</TitleCard>
          <UlList>
            <li>Primeiro item da lista</li>
            <li>Segundo item da lista</li>
            <li>Terceiro item da lista</li>
            <li>Quarto item da lista</li>
            <li>Quinto item da lista</li>
            <li>Sexto item da lista</li>
          </UlList>
        </Card>
      </ServicesArea>
    </>
  );
};

const Title = styled.h2`
  font-size: 40px;
  color: #252b42;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
`;
const ServicesArea = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;
const Card = styled.div`
  width: 300px;
  border: 1px solid #a9d6ff;
  border-radius: 10px;
  background: #ffffff;
`;
const TitleCard = styled.h3`
  background: #219653;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  border-radius: 10px 10px 0 0;
`;
const UlList = styled.ul`
  padding: 20px;
  li {
    text-align: justify;
    margin-bottom: 5px;
    margin-left: 10px;
  }
`;

export default Services;
