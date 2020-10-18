import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

const KeyboardShowState = (): boolean => {
  const [keyboardState, setKeyboardState] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);
  const keyboardDidShow = () => {
    setKeyboardState(true);
  };
  const keyboardDidHide = () => {
    setKeyboardState(false);
  };
  return keyboardState;
};
export default KeyboardShowState;
