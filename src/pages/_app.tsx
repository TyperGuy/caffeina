import '../assets/styles/style.global.scss';
import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection :'column',
        justifyContent: 'center',
        }}>
        <div style={{
          width: '100%',
          height: '70px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          backgroundColor:'#fff',
          top: 0,
          zIndex:1000,
          boxShadow:'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'}}>
        <Header/>
      </div> 
       <Component {...pageProps} />
       <Footer/>
    </div>
      
  )
   
}

export default MyApp;
