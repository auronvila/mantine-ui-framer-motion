import classes from '../Welcome/HeroText.module.css';
import { motion } from 'framer-motion';

export default function BackGroundMotion() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 0.3 + i * 1;
      return {
        pathLength: 1,
        opacity: 0.2,
        transition: {
          pathLength: { delay, type: 'timed', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
  return (
    <motion.svg
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 5
      }}
      className={classes.backgroundAnimation}
      width="600"
      height="600"
      viewBox="0 20 500 600"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="100"
        cy="100"
        r="50"
        stroke="#ff0055"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#00cc88"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="170"
        x2="360"
        y2="30"
        stroke="#00cc88"
        variants={draw}
        custom={2.5}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="30"
        rx="20"
        stroke="#0099ff"
        variants={draw}
        custom={3}
      />
      <motion.circle
        cx="100"
        cy="300"
        r="80"
        stroke="#0099ff"
        variants={draw}
        custom={2}
      />
      <motion.line
        x1="220"
        y1="230"
        x2="360"
        y2="370"
        stroke="#ff0055"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="370"
        x2="360"
        y2="230"
        stroke="#ff0055"
        custom={3.5}
        variants={draw}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="230"
        rx="20"
        stroke="#00cc88"
        custom={4}
        variants={draw}
      />
      <motion.circle
        cx="100"
        cy="500"
        r="50"
        stroke="#00cc88"
        variants={draw}
        custom={3}
      />
      <motion.line
        x1="220"
        y1="430"
        x2="360"
        y2="570"
        stroke="#0099ff"
        variants={draw}
        custom={4}
      />
      <motion.line
        x1="220"
        y1="570"
        x2="360"
        y2="430"
        stroke="#0099ff"
        variants={draw}
        custom={4.5}
      />
      <motion.rect
        width="140"
        height="140"
        x="410"
        y="430"
        rx="20"
        stroke="#ff0055"
        variants={draw}
        custom={5}
      />
    </motion.svg>
  )
}