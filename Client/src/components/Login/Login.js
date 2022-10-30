import React,{useEffect,useRef} from "react";
import "../Assets/CSS/Login.css";
import Lottie from 'lottie-web'
/* fixed */
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";
export default function Login() {
   const container =useRef(null)
   useEffect(()=>{
      Lottie.loadAnimation({
        container:container.current,
            renderer:'svg',
            loop:true,
        animationData:require('../Assets/svg/25059-gray-seagulls(1).json')
      })
   }, [])

   const boat =useRef(null)
   useEffect(()=>{
    
   
      Lottie.loadAnimation({
        container:boat.current,
            renderer:'svg',
            loop:true,
        animationData:require('../Assets/svg/121419-moving-boat.json')
        
      })
   }, [])
   

   const sun =useRef(null)
   useEffect(()=>{
    
   
      Lottie.loadAnimation({
        container:sun.current,
            renderer:'svg',
            loop:true,
        animationData:require('../Assets/svg/64906-sunny.json')
        
      })
   }, [])

   const dolph =useRef(null)
   useEffect(()=>{
    
   
      Lottie.loadAnimation({
        container:dolph.current,
            renderer:'svg',
            loop:true,
        animationData:require('../Assets/svg/75513-diving-dolphin.json')
        
      })
   }, [])
  return (
    <motion.div >
      <div className="back">
    <div>
    <div className="sun" ref={sun}></div>
    </div>

    <div>
    <div className="dolph" ref={dolph}></div>
    </div>
      <div className="card">
    <div className="bir" ref={container}></div>
       <h1 className="col">Bienvenu Sur Sea </h1>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <br />
      <br />
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <button>Login</button>
      </div>

       <p>Design By Finoana Randria</p>
       
    </div>
        <div className="boat" ref={boat}></div>
    </div>
    </motion.div>
    
    

  );
}
