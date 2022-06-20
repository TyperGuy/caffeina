import type { NextPage } from 'next';
import  Acordion,{QuestionType}  from 'components/acordion';
import Questions from '../international/pt-pt/fqa.json';
import { useState } from 'react';

const Style ={
  width:'100%',
  display:'grid',
  placeItems:'center',
  margin:'100px 0'
}
const Style1 ={
  width:'800px',
}
const FQA: NextPage = () => {
  return(
    <div style={Style}>
      <div style={Style1}>
        <h1>Perguntas mais frequêntes</h1>
        <span>Um compilado das perguntas que temos recebido com mais frequência.
          Se a tua pergunta não está a qui listada, não te preocupes tu podes
          perguntar <a href="" >aqui</a>!
        </span>
        <br />
        <br />
        <br />
        <div>
          {
            Questions.map(question =>
              <Acordion
              {...question}
              />
            )
          }
        </div>
      </div>
    </div>
  )
};

export default FQA;



