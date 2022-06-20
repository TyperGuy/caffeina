import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import React from 'react';
import FloatingButton from 'components/landing-page-float-buttons';
import Modal from 'components/modal';
import Calltoaction from '../views/calltoaction/';
import Events from '../views/events';
import Sponsors from 'views/sponsors';


const Home: NextPage = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if(modalRef.current) {
      modalRef.current.handleShow(true)
    }
  }, [])

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
      <Events/>
      <FloatingButton/>
      <Modal modalRef={modalRef} />
    </div>
  )
};

export default Home;
