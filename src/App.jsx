import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Box from './Box';

function App() {
  return (
    <div>
      <Box size="small" roundedCorners>
        Small box with rounded corners
      </Box>
      <Box size="medium">
        Medium box
      </Box>
      <Box size="large" roundedCorners>
        Large box with rounded corners
      </Box>
    </div>
  );
}

export default App;