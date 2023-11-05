import BasicsOfMotion from './BasicsOfMotion.tsx';
import classes from '../Welcome/HeroText.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Explore() {

  return (
    <div style={{ display: 'flex', placeContent: 'center', gap: '0.8rem' }}
         className="text-3xl underline font-black">
      <BasicsOfMotion/>

    </div>
  )
}
