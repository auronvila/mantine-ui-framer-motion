import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import customStyles from './Button.module.css'
export default function BasicsOfMotion() {
  const [visible, setVisible] = useState<boolean>(true);
  const navigate = useNavigate()

  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100vh', gap: '0.8rem' }}>
      <motion.button
        onClick={() => setVisible(!visible)}
        className={customStyles.buttonStyle}
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode={'popLayout'}>
        {visible && <motion.div
          initial={{
            rotate: '0deg',
            scale: 0,
            y: 0
          }}
          animate={{
            rotate: '180deg',
            scale: 1,
            y: [0, 120, 10, 10, 120]
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
            times: [0, 0.25, 0.5, 0.7, 1]
          }}
          exit={{
            rotate: '0deg',
            scale: 0,
            y: 0
          }}
          style={{ width: 150, height: 150, backgroundColor: 'white' }}>
        </motion.div>}
      </AnimatePresence>
      <AnimatePresence mode={'popLayout'}>
        <motion.button
          onClick={() => navigate('/')}
          style={{
            marginTop: 110,
            paddingRight: 20,
            paddingLeft: 20,
            paddingTop: 20,
            paddingBottom: 20,
            borderWidth: 1,
            borderRadius: 20,
            marginRight:15,
          }}
          whileHover={{
            borderWidth: 4,
            borderColor: 'red',
            borderRadius: 99,
            msScrollbar3dlightColor: 'blue'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Go Back
        </motion.button>
      </AnimatePresence>
    </div>
  )
}