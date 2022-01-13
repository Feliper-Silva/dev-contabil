import React from 'react';

import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection>
      <TitleAbout>Sobre nós</TitleAbout>
      <LowerText>
        Estamos presente no mercado há mais de 4 décadas auxiliando nossos
        clientes nacionais e internacionais que já atuam ou desejam abrir seus
        negócios e ingressar no Brasil. Assessoramos investidores que queiram
        prospectar seus negócios no Brasil e investidores (“brasileiros”)
        interessados em fazer negócios em outros países. Oferecemos “backoffice”
        nas áreas Financeira, Recursos Humanos, Tributária e Contabilidade,
        inclusive a abertura, legalização e regularização de empresas e
        negócios. Com pesquisas de mercado, montamos toda estrutura
        organizacional, ambiente operacional e logística de suas atividades, com
        profissionais qualificados, competentes e continuamente treinados. Somos
        especialistas em empresas tributadas pelo LUCRO REAL e Contabilidade em
        IFRS. Assim, o Planejamento das Operações e suas consequências
        tributárias passam a ser condições de competitividade, inclusive
        sugerindo incorporação ou desmembramento de atividades.
      </LowerText>
    </AboutSection>
  );
};

const AboutSection = styled.div`
  background: #00095d;
`;
const TitleAbout = styled.h2`
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  padding-top: 50px;
`;
const LowerText = styled.p`
  font-size: 28px;
  color: #ffffff;
  text-align: justify;
  text-indent: 20px;
  padding: 20px 50px 50px 50px;
`;

export default About;
