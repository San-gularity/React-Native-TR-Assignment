// CommentCard.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CommentCard = ({ comment, onPress, isCommentScreen }) => {
  return (
    <TouchableOpacity onPress={() => onPress(comment.postId)}>
      <View style={styles.commentCard}>
        <Text style={styles.commentName}>{comment.name}</Text>
        <Text style={styles.commentEmail}>{comment.email}</Text>
        {isCommentScreen && (
          <>
            <Text style={styles.commentEmail}>{comment.body}</Text>
            <Text style={styles.commentEmail}>Post ID: {comment.postId}</Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  commentCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  commentEmail: {
    color: '#FFA3A3',
  },
});

export default CommentCard;
