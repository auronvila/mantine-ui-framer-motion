import styles from '../Explore/Button.module.css'
import { motion, MotionConfig } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

export default function Gesture() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem'
      }}
    >
      <MotionConfig
        transition={{
          duration: 0.15,
          easings: 'easeInOut'
        }}
      >
        <motion.button
          whileHover={{
            scale: 1.2,
            rotate: '2.5deg'
          }}
          whileTap={{
            scale: 0.95
          }}

          className={styles.buttonStyle}>
          Click Me!
        </motion.button>
        <motion.button
          style={{ backgroundColor: 'red' }}
          whileHover={{
            scale: 1.2,
            rotate: '-2.5deg'
          }}
          whileTap={{
            scale: 0.95
          }}
          className={styles.buttonStyle}>
          Click Me!
        </motion.button>
        <motion.button
          onClick={() => navigate('/')}
          style={{ backgroundColor: 'gray' }}
          whileHover={{
            scale: 1.2,
            rotate: '-2.5deg'
          }}
          whileTap={{
            scale: 0.95
          }}
          className={styles.buttonStyle}>
          Go Back
        </motion.button>
      </MotionConfig>
    </div>
  )
}