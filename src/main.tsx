import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Explore from './Explore/Explore.tsx';
import { theme } from './theme.ts';
import { MantineProvider } from '@mantine/core';
import Gesture from './Gesture/Gesture.tsx';
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
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
      <RouterProvider router={router}/>
    </MantineProvider>
  </React.StrictMode>
);
