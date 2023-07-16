import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(246, 247, 250, 0.2)',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkContainer: {
    width: 66,
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#22E17B',
    borderRadius: 50,
    marginBottom: 40,
  },
  title: {
    color: '#1E1E20',
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Raleway_600SemiBold',
  },
  description: {
    color: '#60626D',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 21,
    fontFamily: 'Raleway_400Regular',
  },
});
