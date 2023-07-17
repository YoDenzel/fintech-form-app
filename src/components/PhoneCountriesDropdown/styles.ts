import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  list: {
    flexGrow: 1,
    position: 'absolute',
    left: 0,
    top: 45,
    height: 200,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: '#fff',
    width: 66,
    paddingTop: 20,
    zIndex: 100,
  },
  container: {
    backgroundColor: '#fff',
    width: 66,
    paddingTop: 20,
    height: '100%',
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 10,
  },
  phoneNumber: {
    fontSize: 15,
    lineHeight: 20,
    color: '#1E1E20',
    textAlign: 'center',
  },
});
