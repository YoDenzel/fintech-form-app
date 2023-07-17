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
  scrollViewContainer: { flexGrow: 1 },
  contentContainer: {
    flex: 1,
  },
  pageTitleContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  pageTitle: {
    textAlign: 'center',
    fontFamily: 'Raleway_600SemiBold',
    fontSize: 24,
    lineHeight: 34,
    color: '#1E1E20',
    marginBottom: 8,
  },
  pageTitleDescription: {
    textAlign: 'center',
    fontFamily: 'Raleway_400Regular',
    fontSize: 15,
    lineHeight: 21,
    color: '#60626D',
  },
  submitButtonContainer: {
    zIndex: -1,
  },
  submitButton: {
    marginBottom: 10,
  },
});
