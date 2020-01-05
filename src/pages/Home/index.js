import React, { useEffect } from 'react';
import Auth from '../../Auth';

// import { Container } from './styles';

export default function Home() {
  
  useEffect(() => {
    const checkAuth = () => {
      const auth = Auth();

      if(!auth) {
        window.location.href = '/login'
      }
    }

    checkAuth();
  });
  
  return (
    <div />
  );
}
