import { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icons } from 'assets/icons';

import styles from './styles';

export const Checkbox = ({ onChecked, checkboxText }: TCheckbox) => {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
    onChecked && onChecked(!checked);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.container, checked && styles.checked]}
        onPress={handlePress}>
        {checked && <Icons.CheckMark />}
      </TouchableOpacity>
      {checkboxText && <Text style={styles.text}>{checkboxText}</Text>}
    </View>
  );
};

type TCheckbox = {
  onChecked?: (value: boolean) => void;
  checkboxText?: string;
};
