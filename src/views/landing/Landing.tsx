import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import Header from '../../components/header/Header';
import React from 'react';
import FloatingButton from 'components/landing-page-float-buttons';
import Modal from 'components/modal';
import Calltoaction from '../calltoaction/index';


const LandingPage: NextPage = () => {
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
      <div style={{
        width: '100%',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow:'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'}}>
        <Header/>
      </div>
      <Calltoaction/>
      <FloatingButton isOnBottom={isScrolling} />
      <Modal modalRef={modalRef} />
    </div>
  )
};

export default LandingPage;
