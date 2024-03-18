import { StyleSheet } from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  postItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postHeader: {
    flexDirection: 'row', 
    alignItems: 'left',
  },
  logo: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    alignSelf: 'stretch',
  },
  author: {
    fontSize: 14,
    color: '#666',
    marginLeft: 30,
  },
});

export default HomeScreenStyles;
