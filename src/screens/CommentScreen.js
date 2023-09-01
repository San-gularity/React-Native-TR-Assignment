import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CommentCard from '../components/CommentCard';

const CommentScreen = () => {
  const route = useRoute();
  const { postId, comments } = route.params;
  const filteredComments = comments.filter((comment) => comment.postId === postId);

  const handleCommentPress = () => {
    // Do nothing
  };

  const renderCommentCard = ({ item }) => (
    <CommentCard comment={item} onPress={handleCommentPress} isCommentScreen={true} />
  );

  return (
    <View style={styles.container}>
    <FlatList
      data={filteredComments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCommentCard}
      style={styles.flatList}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B', // Pinkish-red text color
  },
  commentEmail: {
    color: '#FFA3A3', // Lighter pinkish-red text color
  },
});

export default CommentScreen;
