import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Text style={styles.text}>Add your dashboard content here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#222',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
