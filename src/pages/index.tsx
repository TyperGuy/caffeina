import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import FloatingButton from 'components/landing-page-float-buttons';
import Modal from 'components/modals/cookies';
import Calltoaction from '../views/calltoaction/';
import Events from '../views/events';
import Sponsors from 'views/sponsors';
import Banner from '../components/banner'


const Home: NextPage = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const modalRef = useRef<any>(null);



  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('altura', window.innerHeight)
      const $float = document.getElementById('float');
      const floating = $float?.getBoundingClientRect();

      if(floating && floating.bottom - window.innerHeight > 10){
        setIsScrolling(true)
      }else setIsScrolling(false)
    })

    return window.addEventListener('scroll', () => {})
  }, [isScrolling])

  return(
    <div id="float" style={{ display: 'flex', height: 'auto',flexDirection: 'column',alignItems: 'center'}}>
      <Calltoaction/>
      <Sponsors/>
      <Banner/>
      <Events/>
      <FloatingButton/>
    </div>
  )
};

export default Home;
