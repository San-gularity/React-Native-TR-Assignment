import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const CommentScreen = () => {
  const route = useRoute();
  const { comment } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.commentName}>{comment.name}</Text>
      <Text style={styles.commentEmail}>{comment.email}</Text>
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
