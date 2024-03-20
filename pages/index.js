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
    };
  
    // Function to enable scroll
    const enableScroll = () => {
      document.body.style.overflow = '';
    };

  useEffect(() => {
    const splineElement = document.getElementById('splineElement');
    const scrollElement = document.getElementById('scrollElement');
    if (isMobileScreen && splineElement) {
      // Add event listeners if on a mobile screen
      splineElement.addEventListener('touchstart', disableScroll);
      scrollElement.addEventListener('touchstart', enableScroll);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (splineElement) {
        splineElement.removeEventListener('touchstart', disableScroll);
        scrollElement.removeEventListener('touchstart', enableScroll);
      }
    };
  }, [isMobileScreen]);

  return (
    <>
    <div className="bg-black h-full w-full p-5 text-white flex flex-col items-center min-h-[120vh]">
          <div className="absolute top-3 left-3 font-monument font-bold md:text-lg tracking-wider">DIALECT</div>
          <motion.div
          initial={{scale: 0.3}}
          animate={isLoaded && {scale: 1, transition: {ease: 'easeInOut', bounce: 0.2, delay: 0.1}}}
          >
          <Spline id="splineElement" scene={isMobileScreen ? "https://prod.spline.design/CmuVQOCdo-3Wkmxw/scene.splinecode" : "https://prod.spline.design/nLwJVXeu-JWHQAjv/scene.splinecode"} />
          </motion.div>
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
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg">Studio Dialect is thrilled to announce the appointment of Simon Hathaway as Non-Executive, effective immediately. Simon brings to Studio Dialect a wealth of experience from the global retail and innovation sector, having held leadership roles at renowned agencies including Outform, where he served as President & Group Managing Director for EMEA, Cheil Worldwide as President & Global Chief Retail Officer and Saatchi & Saatchi X as CEO EMEA.</motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg">Simon&apos;s career is distinguished by his commitment to merging technology and creativity to redefine customer experience. His leadership whether at Outform, Cheil or Saatchi X saw them partner with some of the world&apos;s most iconic brands and retailers, driving forward innovations that have transformed the retail and brand activation landscape.</motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg"><span className="font-extrabold">Jon, Dialect&apos;s CTO</span>, commented on the appointment, <span className="text-italic">&quot;Simon&apos;s visionary approach to retail and marketing is exactly what Studio Dialect needs as we continue to explore new horizons in future focused brand activation and 3D motion work. His track record of transformative leadership and innovation is unparalleled, and we are excited to have him on board.&quot;</span></motion.div>
            <motion.div
            variants={viewVariants}
            initial='initial'
            whileInView='whileInView'
            className="mb-5 leading-tight md:text-lg"><span className="font-extrabold">From Andy, Creative Director</span> at Dialect: <span className="text-italic">&quot;We&apos;ve worked with Simon for several years as a client, having him join our team is a game-changer for us. His insight into the intersection of retail, technology, and creative strategy will undoubtedly propel Studio Dialect to new heights. I look forward to collaborating closely with Simon to deliver groundbreaking solutions for our clients.&quot;</span></motion.div>
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
            className="leading-tight md:text-lg">Studio Dialect is a &quot;first focused&quot; interactive studio specialising in interactive brand activations, creative technology and motion work. Known for its innovative approach to digital storytelling and immersive experiences, Studio Dialect collaborates with brands to bring their visions to life in unique and engaging ways.</motion.div>
            </div>
          </div>
    </div>
    <AnimatePresence>
      <Loader isLoaded={isLoaded}/>
    </AnimatePresence>
    </>
  );
}
