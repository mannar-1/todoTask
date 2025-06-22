// hooks/useBiometricAuth.ts
import { useState, useEffect } from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

export const useBiometricAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check biometric availability on mount
  useEffect(() => {
    checkBiometrics();
  }, []);

  const checkBiometrics = async () => {
    try {
      const { available } = await rnBiometrics.isSensorAvailable();
      if (!available) {
        console.log('Biometrics not available');
      }
    } catch (error) {
      console.error('Biometrics check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

const handleBiometricLogin = async () => {
    try {
      const { success } = await rnBiometrics.simplePrompt({
        promptMessage: 'Login with fingerprint',
        cancelButtonText: 'Cancel'
      });

      setIsLoggedIn(success);
      return success;
    } catch (error) {
      console.error('Auth failed:', error);
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    isLoading,
    handleBiometricLogin,
    handleLogout
  };
};