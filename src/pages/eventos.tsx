import type { NextPage } from 'next';
import Lottie from 'react-lottie';
import animationData from '../lotties/not-found.json';



const events: NextPage = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return(
    <div id="float"
      style={{
        display: 'grid',
        width:'100vw',
        height:'70vh',
        placeItems:'center'
      }}>
      <div style={{textAlign: 'center',color:'#b6bbc4'}}>
        <Lottie
          options={defaultOptions}
          height={200}
          width={200}
        />
        <h2>Oops!! Parece que algo correu mal</h2>
        <span>Resolvendo...</span>
      </div>
    </div>
  )
};

export default events;
