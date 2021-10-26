import React from 'react';
import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { MainScreen } from './screens/MainScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? 30 : 0
  },
});
