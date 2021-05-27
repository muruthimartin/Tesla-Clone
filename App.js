import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View} from 'react-native';
import InventoryListing from './components/InventoryListing'
import HeaderFiles from './components/HeaderFiles'

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderFiles />
      <InventoryListing />   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
