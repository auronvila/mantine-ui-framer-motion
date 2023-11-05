import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Explore from './Explore/Explore.tsx';
import { theme } from './theme.ts';
import { MantineProvider } from '@mantine/core';
import Gesture from './Gesture/Gesture.tsx';
import AnimationControls from './AnimationControls/AnimationControls.tsx';
import ViewBasedAnimations from './viewBasedAnimations/ViewBasedAnimations.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/explore',
    element: <Explore/>
  },
  {
    path: '/gesture',
    element: <Gesture/>
  },
  {
    path: '/animationControl',
    element: <AnimationControls/>
  },
  {
    path: '/viewBased',
    element: <ViewBasedAnimations/>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
