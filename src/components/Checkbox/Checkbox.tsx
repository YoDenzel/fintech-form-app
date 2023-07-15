import { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { Icons } from 'assets/icons';

export const Checkbox = ({ onChecked }: TCheckbox) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
    onChecked && onChecked(!checked);
  };

  return (
    <TouchableOpacity
      style={[styles.container, checked && styles.checked]}
      onPress={handlePress}>
      {checked && <Icons.CheckMark />}
    </TouchableOpacity>
  );
};

type TCheckbox = {
  onChecked?: (value: boolean) => void;
};
