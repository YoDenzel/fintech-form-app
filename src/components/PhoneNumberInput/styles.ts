import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  constainer: {},
  body: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    backgroundColor: '#ffffff',
    minHeight: 55,
    alignItems: 'center',
    borderRadius: 12,
  },
  bodyError: {
    borderColor: '#C32336',
  },
  containerRegion: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRightColor: '#F6F7FA',
    borderRightWidth: 4,
    height: '100%',
  },
  regionTitle: {
    fontSize: 15,
    lineHeight: 20,
    marginRight: 12,
    color: '#1E1E20',
  },
  inputWrap: {
    flex: 1,
    minWidth: 200,
    position: 'relative',
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginTop: 0,
    marginLeft: 0,
    alignSelf: 'stretch',
    position: 'relative',
    backgroundColor: 'transparent',
    color: '#1E1E20',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
  },
  resetIconWrap: {
    position: 'absolute',
    right: 0,
  },
  errorWrap: {
    minHeight: 20 * 1.5,
  },
  errorTextWrap: {
    marginTop: 5,
    alignItems: 'flex-start',
  },
  errorText: {
    color: '#C32336',
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '400',
  },
});
