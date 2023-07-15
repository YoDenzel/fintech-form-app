import { StyleSheet } from 'react-native';

export const DEFAULT_BACKGROUND_COLOR = 'rgba(252, 222, 49, 1)'; //'#fcde31ff';
export const DISABLED_BACKGROUND_COLOR = 'rgba(252, 222, 49, 0.5)'; //'#fcde3133';

export default StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 1,
    borderRadius: 12,
    minHeight: 50,
    maxHeight: 50,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#FCFCFC',
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Raleway_500Medium',
    fontWeight: '600',
  },
  buttonTextDisabled: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
