import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsSuccess, fetchCommentsFailure } from '../commentSlice';
import CommentCard from '../components/CommentCard';
// import { connect } from 'react-redux';
// import { fetchComments } from '../redux/actions/commentAsyncActions';

const HomeScreen = () => {
  // const [comments, setComments] = useState([]);
  const navigation = useNavigation();

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then((response) => response.json())
  //     .then((data) => setComments(data))
  //     .catch((error) => console.error('Error fetching comments:', error));
  // }, []);
  const dispatch = useDispatch();
const comments = useSelector((state) => state.comments.data);
const error = useSelector((state) => state.comments.error);

const fetchComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) => dispatch(fetchCommentsSuccess(data)))
    .catch((error) => dispatch(fetchCommentsFailure(error)));
};

useEffect(() => {
  // Call fetchComments when the component mounts
  fetchComments();
}, []);

  const handleCommentPress = (postId) => {
    // Navigate to a different screen with the selected comment
    navigation.navigate('CommentScreen', { postId, comments });
  };

  const renderCommentCard = ({ item }) => (
    <CommentCard comment={item} onPress={handleCommentPress} isCommentScreen={false} />
  );

  return (
    <View style={styles.container}>
      {/* FlatList displaying comments */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCommentCard}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentCard: {
    backgroundColor: '#fff', // Dark background color
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#222',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flatList: {
    zIndex: 1, // Lower z-index to place it below the navigation buttons
  },
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B', // Pinkish-red text color
  },
  commentEmail: {
    color: '#FFA3A3', // Lighter pinkish-red text color
  },
  commentBody: {
    marginTop: 10,
    color: '#ffffff', // Lighter pinkish-red text color
  },
  container: {
    flex: 1,
    position: 'relative', // Make the container relative for z-index to work
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Background color for the navigation buttons container
    paddingVertical: 10,
    zIndex: 2,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#007bff', // Button background color
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontWeight: 'bold',
  },
});

export default HomeScreen;
