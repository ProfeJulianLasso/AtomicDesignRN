import {useState} from 'react';

type InputHookType = {
  text?: number;
  error: boolean;
  onChangeText: (text: string) => void;
};

export const useInputHook = (): InputHookType => {
  const [text, setText] = useState<number>();
  const [error, setError] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    if (text.match(/^[0-9]+$/) != null) {
      setText(Number(text));
      setError(false);
    } else {
      setError(true);
    }
  };

  return {text, error, onChangeText};
};
