import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; // Import TouchableOpacity for the buttons
import {useNavigation} from '@react-navigation/native';

function BottomTabs() {
  const navigation = useNavigation();

  const [activeTab, setActiveTab] = useState('Home');

  const handleTabPress = tabName => {
    setActiveTab(tabName);
  };

  return (
    // <View style={styles.container}>
    <View style={styles.navigationButtons}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Home' ? styles.activeTab : styles.inactiveTab,
        ]}
        onPress={() => {
          navigation.navigate('Home');
          handleTabPress('Home');
        }}>
        <Text style={[
              styles.tabText,
              activeTab === 'Home' ? styles.activeTabText : styles.inactiveTabText,
            ]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Dashboard' ? styles.activeTab : styles.inactiveTab,
        ]}
        onPress={() => {
          navigation.navigate('DashboardScreen');
          handleTabPress('Dashboard');
        }}>
        <Text style={[
              styles.tabText,
              activeTab === 'Dashboard' ? styles.activeTabText : styles.inactiveTabText,
            ]}>Dashboard</Text>
      </TouchableOpacity>
    </View>
    //</View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    height: 60,
    elevation: 5,
  },
  navigationButtons: {
    height: 60,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'orange',
  },
  inactiveTab: {
    backgroundColor: 'white',
  },
  tabText: {
    fontWeight: 'bold',
  },
  activeTabText: {
    color: 'white',
  },
  inactiveTabText: {
    color: 'black',
  },
});

export default BottomTabs;
