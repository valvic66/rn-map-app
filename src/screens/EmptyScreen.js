import React, { useEffect, useContext } from 'react';
import { Context as AuthContext } from '../context/AuthContext';

export default EmptyScreen = () => {
  const { checkLocalSignIn } = useContext(AuthContext);

  useEffect(() => {
    checkLocalSignIn();
  }, []);

  return null;
};