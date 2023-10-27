import { Title, Text, Container, Button } from '@mantine/core';
import classes from './HeroText.module.css';
import { Dots } from './Dots.tsx';
import { useNavigate } from 'react-router-dom';
import BackGroundMotion from '../BackGroundMotion.tsx';
import { motion } from 'framer-motion';

export function Welcome() {
  const navigate = useNavigate()
  return (
    <>
      <Container className={classes.wrapper} top={70} size={1900}>
        <Dots className={classes.dots} style={{ left: 0, top: 0 }}/>
        <Dots className={classes.dots} style={{ left: 60, top: 0 }}/>
        <Dots className={classes.dots} style={{ left: 0, top: 140 }}/>
        <Dots className={classes.dots} style={{ right: 0, top: 60 }}/>
        <Dots className={classes.dots} style={{ left: 60, top: 300 }}/>
        <Dots className={classes.dots} style={{ right: 60, top: 300 }}/>

        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text component="span" className={classes.highlight} inherit>WELCOME</Text>{' '}
          </Title>

          <Container p={0} size={600}>
            <Text size="xl" c="dimmed" className={classes.description}>
              Welcome to the site built by Auron Vila using Mantine-UI and framer-motion
            </Text>
          </Container>

          <div className={classes.controls}>
            {/*<Button onClick={() => navigate('explore')} className={classes.control} size="lg">Explore More</Button>*/}
            <motion.div
              style={{ paddingRight:20, paddingLeft:20, paddingTop:20,paddingBottom:20, borderWidth:1, borderRadius:20}}
              className={classes.customButton}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >awdasdwa</motion.div>
          </div>
        </div>
      </Container>
      <div style={{ flexDirection: 'row' }}>
        <BackGroundMotion/>
        <BackGroundMotion/>
      </div>
    </>
  );
}
