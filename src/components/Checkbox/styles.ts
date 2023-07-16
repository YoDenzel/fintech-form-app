import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#60626D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  checked: {
    backgroundColor: '#413DFF',
    borderWidth: 0,
  },
  text: {
    fontFamily: 'Raleway_400Regular',
    fontSize: 13,
    lineHeight: 18,
    color: '#60626D',
  },
});
