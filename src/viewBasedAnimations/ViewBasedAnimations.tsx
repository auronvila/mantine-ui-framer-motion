import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ViewBasedAnimations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false })
  const navigate = useNavigate()

  useEffect(() => {
    console.log(isInView)
  }, [isInView]);

  return <>
    <div style={{ height: '190vh', textAlign: 'center' }}>
      <motion.div
        style={{
          height: '40vh',
          backgroundColor: 'black'
        }}
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
      >Fully scroll and see
      </motion.div>
      {isInView && <motion.button
        onClick={() => navigate('/')}
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1
        }}
        transition={{
          duration: 1.5,
          type: 'spring'
        }}
      >Go Back</motion.button>}
      <div
        ref={ref}
        style={{
          height: '30vh',
          backgroundColor: isInView ? 'blue' : 'red',
          transition: '1s background'
        }}
      />
    </div>
  </>
}