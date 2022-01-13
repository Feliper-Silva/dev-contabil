import React from 'react';
import styled from 'styled-components';

const Form = () => {
  return (
    <Forms action="">
      <h3>Entre em Contato</h3>
      <label htmlFor="name">
        Nome
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu Nome"
        />
      </label>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu E-mail"
        />
      </label>
      <label htmlFor="message">
        Fale Conosco
        <textarea
          name="message"
          id="message"
          placeholder="Qual sua dúvida?"
        ></textarea>
      </label>
      <button>Enviar</button>
    </Forms>
  );
};
const Forms = styled.form`
  background: #fff;
  border-radius: 10px;
  float: right;
  padding: 20px;
  margin-right: 58px;
  position: relative;
  bottom: 70px;

  h3 {
    font-size: 24px;
    color: #252b42;
    margin-bottom: 30px;
    text-align: center;
  }
  label {
    font-size: 14px;
    color: #252b42;
  }
  input {
    background: #f9f9f9;
    display: block;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    height: 50px;
    width: 356px;
    margin-bottom: 20px;
    padding-left: 10px;
  }
  textarea {
    background: #f9f9f9;
    display: block;
    height: 120px;
    width: 354px;
    border: 1px solid #dddddd;
    border-radius: 5px;
    margin-bottom: 10px;
    padding-left: 10px;
  }
  button {
    width: 366px;
    height: 40px;
    cursor: pointer;
    border: none;
    align-items: center;
    background: #40bb15;
    border-radius: 5px;
    color: #fff;
  }
`;

export default Form;
