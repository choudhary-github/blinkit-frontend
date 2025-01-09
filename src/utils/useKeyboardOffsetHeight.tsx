import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardOffsetHeight = () => {
  const [keyboardOffsetHeight, setKeyboardOffsetHeight] = useState(0);

  useEffect(() => {
    const keyboardAndroidShowListner = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );

    const keyboardAndroidHideListner = Keyboard.addListener(
      'keyboardDidHide',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );
    const keyboardWillShowListner = Keyboard.addListener(
      'keyboardWillShow',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );
    const keyboardWillHideListner = Keyboard.addListener(
      'keyboardWillHide',
      e => {
        setKeyboardOffsetHeight(e.endCoordinates.height);
      },
    );

    return () => {
      keyboardAndroidShowListner.remove();
      keyboardAndroidHideListner.remove();
      keyboardWillShowListner.remove();
      keyboardWillHideListner.remove();
    };
  }, []);

  return keyboardOffsetHeight;
};

export default useKeyboardOffsetHeight;
