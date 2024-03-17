import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native'; 
import axios from 'axios';
import HomeScreenStyles from './HomeScreen.style';
import redditLogo from './redditLogo.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (loading || loadingMore) return;

    setLoading(true);
    const url = after ? `https://api.reddit.com/r/funny/hot.json?after=${after}` : 'https://api.reddit.com/r/funny/hot.json';
    try {
      const response = await axios.get(url);
      const newPosts = response.data.data.children.filter(post => post.data.thumbnail !== 'self' && post.data.thumbnail !== 'nsfw');
      if (after) {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      } else {
        setPosts(newPosts);
      }
      setAfter(response.data.data.after);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => {
    const post = item.data;
    return (
      <TouchableOpacity
        style={HomeScreenStyles.postItem}
        onPress={() => navigation.navigate('PostDetail', { post })}
      >
        <View style={HomeScreenStyles.postHeader}>
          <Image source={redditLogo} style={HomeScreenStyles.logo} />
          <Text style={HomeScreenStyles.title}>{post.title}</Text>
        </View>
        <Text style={HomeScreenStyles.author}>{`by ${post.author}`}</Text>
      </TouchableOpacity>
    );
  };

  const handleEndReached = () => {
    if (!loading && !loadingMore) {
      setLoadingMore(true);
      fetchPosts().finally(() => setLoadingMore(false));
    }
  };

  return (
    <View style={HomeScreenStyles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.data.id + index}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loadingMore ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      />
    </View>
  );
};

export default HomeScreen;
