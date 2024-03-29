import Image from "next/image";
import { Nunito } from "next/font/google";
// import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from "framer-motion"
import Loader from "./components/Loader";
import { useState, lazy, Suspense, useEffect } from "react";
import isMobile from '../utils/isMobile';
import Spline from '@splinetool/react-spline';


const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  
  setTimeout(() => {
    setIsLoaded(true);
  }, 1200);

  const viewVariants = {
    initial: { opacity:0, y: 100},
    whileInView: {opacity: 1, y: 0, transition: {ease: 'easeInOut', bounce: 0.2}},
    animate: isLoaded && {opacity: 1, y: 0, transition: {ease: 'easeInOut', bounce: 0.2, delay: 0.3}}
  };

  

  useEffect(() => {
    setIsMobileScreen(isMobile());
  }, []);

    // Function to disable scroll
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
      console.log('disabled scroll')
    };
  
    // Function to enable scroll
    const enableScroll = () => {
      document.body.style.overflow = '';
      console.log('enabled scroll')
    };


    useEffect(() => {
      const splineElement = document.getElementById('splineElement');
      const scrollElement = document.getElementById('scrollElement');
      let startY = 0; // Store the starting Y position of the touch
      const handleTouchStart = (event) => {
        startY = event.touches[0].clientY; // Set the start Y to the initial touch position
        disableScroll(); // You might choose to disable scroll initially or not, based on testing
      };
    
      const handleTouchMove = (event) => {
        const moveY = event.touches[0].clientY;
        const diffY = moveY - startY;
    
        if (Math.abs(diffY) > 50) { // Check if the vertical movement is significant
          enableScroll(); // If there's significant vertical movement, enable scrolling
        }
      };
      if (isMobileScreen) {
        disableScroll();
      }
      if (isMobileScreen && splineElement) {
        splineElement.addEventListener('touchstart', handleTouchStart);
        splineElement.addEventListener('touchmove', handleTouchMove);
        scrollElement.addEventListener('touchstart', enableScroll);
      }
    
      return () => {
        if (splineElement) {
          splineElement.removeEventListener('touchstart', handleTouchStart);
          splineElement.removeEventListener('touchmove', handleTouchMove);
          scrollElement.removeEventListener('touchstart', enableScroll);
        }
      };
    }, [isMobileScreen]);

  return (
    <>
    <div className="bg-black h-full w-full p-5 text-white flex flex-col items-center min-h-[120vh]">
          <a href="https://www.studiodialect.com/"><div className="absolute top-3 left-4 font-monument font-bold md:text-lg tracking-wider">DIALECT</div></a>
          <Suspense fallback={<div>Loading...</div>}>
          <motion.div
          initial={{scale: 0.3}}
          animate={isLoaded && {scale: 1, transition: {ease: 'easeInOut', bounce: 0.2, delay: 0.1}}}
          className={`${isMobileScreen ? 'mt-[-4vh]' : ''}`}
          >
          <Spline id="splineElement" scene={isMobileScreen ? "https://prod.spline.design/CmuVQOCdo-3Wkmxw/scene.splinecode" : "https://prod.spline.design/nLwJVXeu-JWHQAjv/scene.splinecode"} />
          </motion.div>
          </Suspense>
          <div id="scrollElement" className="md:w-[70em] pb-20 mt-[-4vh] md:mt-[-8vh] relative z-20">
            <motion.div
            variants={viewVariants}
            initial='initial'
            animate='animate'
            className="text-2xl md:text-6xl leading-snug font-monument uppercase mb-4">Simon Hathaway Joins Studio Dialect</motion.div>
            <div
            className={`${nunito.className} font-light`}>
            <motion.div
            variants={viewVariants}
            initial='initial'
            animate='animate'
            className="mb-5 leading-tight md:text-lg">Studio Dialect is thrilled to announce the appointment of Simon Hathaway as Non-Executive Chairman, effective immediately. Simon brings to Studio Dialect a wealth of experience having held leadership role with brand owners and agencies. He most recently served as President & EMEA Group Managing Director, with Retail Innovation agency Outform, joining them from French technology giant Dassault Systemes, where he was Global CMO. Prior to that, his roles included President & Global Chief Retail Officer, Cheil Worldwide, and CEO EMEA of the Publicis Groupe-owned Saatchi & Saatchi X.</motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg">Simon&apos;s career is distinguished by his commitment to delivering customer experience that blends technology and creativity. He has worked with some of the world&apos;s most iconic brands and retailers, driving forward innovations that have transformed brand activation and commerce.</motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg"><span className="font-extrabold">Jon, Dialect&apos;s CTO</span>, commented on the appointment, <span className="text-italic">&quot;Simon&apos;s visionary approach to marketing and commerce is exactly what Studio Dialect needs as we continue to explore new horizons in future-focused brand activation and 3D motion work. His track record of transformative leadership and innovation is unparalleled, and we are excited to have him on board.&quot;</span></motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg"><span className="font-extrabold">From Andy, Creative Director</span> at Dialect: <span className="text-italic">&quot;We&apos;ve worked with Simon for several years as a client, having him join our team is a game-changer for us. His insight into the intersection of creative strategy, retail, and technology, will undoubtedly propel Studio Dialect to new heights. I look forward to collaborating closely with Simon to deliver groundbreaking solutions for our clients.&quot;</span></motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg">Simon&apos;s appointment is a testament to Studio Dialect&apos;s commitment to excellence and innovation in the field of interactive and experiential. Under his guidance, the studio is set to achieve remarkable growth and continue delivering exceptional value to its clients and partners.</motion.div>
            
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="font-monument uppercase text-2xl mb-2 mt-14 font-medium">About Studio Dialect</motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="leading-tight md:text-lg">Studio Dialect is a &apos;first focused&apos; interactive studio specialising in interactive brand activations, creative technology and motion work. Known for its innovative approach to digital storytelling and immersive experiences, Studio Dialect collaborates with brands to bring their visions to life in unique and engaging ways.</motion.div>
            </div>
          </div>
    </div>
    <AnimatePresence>
      <Loader isLoaded={isLoaded}/>
    </AnimatePresence>
    </>
  );
}
