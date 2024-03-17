import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PostDetailStyles from './PostDetail.style';
import placeholder from './placeholder.png';

const PostDetail = ({ route }) => {
  const { post } = route.params;
  const [postDetail, setPostDetail] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetchPostDetail();
  }, []);

  const fetchPostDetail = async () => {
    try {
      const response = await axios.get(`https://api.reddit.com${post.permalink}.json`);
      const postData = response.data[0].data.children[0].data;
      const createdTimestamp = postData.created_utc * 1000;
      const createdDate = new Date(createdTimestamp).toLocaleString();
      setPostDetail({ ...postData, created: createdDate });
    } catch (error) {
      console.error('Error fetching post detail:', error);
    } finally {
      setLoading(false); 
    }
  };

  const openLink = () => {
    if (postDetail && postDetail.url) {
      Linking.openURL(postDetail.url);
    }
  }; //WebView

  return (
    <View style={PostDetailStyles.container}>
      {loading ? ( 
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity onPress={openLink}>
            <View style={PostDetailStyles.thumbnailContainer}>
              {postDetail.thumbnail && postDetail.thumbnail !== 'spoiler' ? (
                <Image
                  source={{ uri: postDetail.thumbnail }}
                  style={PostDetailStyles.thumbnail}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={placeholder}
                  style={PostDetailStyles.thumbnail}
                  resizeMode="contain"
                />
              )}
            </View>
          </TouchableOpacity>
          <Text style={PostDetailStyles.title}>{postDetail.title}</Text>
          <View style={PostDetailStyles.detailsContainer}>
            <View style={PostDetailStyles.authorContainer}>
              <Text style={PostDetailStyles.author}>{`Author: ${postDetail.author}`}</Text>
              <Text style={PostDetailStyles.date}>{`Created: ${postDetail.created}`}</Text>
            </View>
            <View style={PostDetailStyles.scoreContainer}>
              <Text style={PostDetailStyles.score}>{`Score: ${postDetail.score}`}</Text>
              <Text style={PostDetailStyles.comments}>{`Comments: ${postDetail.num_comments}`}</Text>
            </View>
          </View>
          <View style={PostDetailStyles.goldContainer}>
            <Text style={PostDetailStyles.gold}>{`Gold Medals: ${postDetail.gilded}`}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default PostDetail;
