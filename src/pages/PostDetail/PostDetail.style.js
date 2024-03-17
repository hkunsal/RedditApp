import { StyleSheet } from 'react-native';

const PostDetailStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10, 
    justifyContent: 'center', 
  },
  thumbnailContainer: {
    alignItems: 'center', 
    marginTop: 10, 
  },
  thumbnail: {
    width: 300, 
    height: 300, 
  },

  detailsContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  authorContainer: {
    flexDirection: 'horizontal',
    alignItems: 'left',
    marginTop: 10,
    paddingLeft: 6,
    paddingRight: -4,
  },
  author: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },

  date: {
    marginTop: 1,
    fontStyle: 'italic',
  },

  created: {
    fontSize: 14,
    color: '#666',
  },
  
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', 
  },

  scoreContainer: {
    flexDirection: 'horizontal',
    alignItems: 'right',
    marginTop: 10,
    textAlign: 'right',
  },

  score: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  comments: {
    fontSize: 15,
    fontWeight: 'bold',
  },

  footerContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  goldContainer: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },

  gold: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#DE8D09',
  },
});

export default PostDetailStyles;
