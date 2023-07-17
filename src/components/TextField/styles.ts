import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },
  cont: {
    width: '100%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingLeft: 12,
    marginBottom: 8,
  },
  inputFocused: {
    borderColor: '#413DFF',
    borderWidth: 1,
  },
  contError: {
    borderBottomColor: '#C32336',
  },
  fieldName: {
    position: 'absolute',
    top: 12,
    color: '#60626D',
    left: 12,
    fontFamily: 'Raleway_500Medium',
  },
  input: {
    color: '#1E1E20',
    fontSize: 15,
    lineHeight: 20,
    paddingHorizontal: 0,
    width: '100%',
    height: '100%',
    fontFamily: 'Raleway_500Medium',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF450B',
    fontFamily: 'Raleway_400Regular',
    fontSize: 13,
    lineHeight: 18,
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginBottom: 8,
  },
});
