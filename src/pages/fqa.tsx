import type { NextPage } from 'next';
import  Acordion  from 'components/acordion';



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
        <Acordion/>
      </div>
    </div>
  )
};

export default FQA;



