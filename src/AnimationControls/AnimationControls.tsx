import { motion, useAnimationControls } from 'framer-motion'
import styles from '../Explore/Button.module.css'
import { useNavigate } from 'react-router-dom';

export default function AnimationControls() {
  const controls = useAnimationControls()
  const navigate = useNavigate()

  function handleClick() {
    controls.start('flip')
  }

  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        gap: '0.8rem'
      }}
    >
      <button onClick={handleClick} className={styles.buttonStyle}>Flip It!</button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'white'
        }}
        variants={{
          initial: {
            rotate: '0deg'
          },
          flip: {
            rotate: '360deg'
          }
        }}
        initial={'initial'}
        animate={controls}
      >
      </motion.div>
      <motion.button onClick={() => navigate('/')}>Go Back</motion.button>
    </div>
  )
}