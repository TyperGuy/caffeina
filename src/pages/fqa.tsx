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
        {
          Questions.map(question =>
            <Acordion
             {...question}
             />
          )
        }
      </div>
    </div>
  )
};

export default FQA;



