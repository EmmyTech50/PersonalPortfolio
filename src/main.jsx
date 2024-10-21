import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import LandingPage from './PortfolioContents/LandingPage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
      
        
          
          

          
          
          
