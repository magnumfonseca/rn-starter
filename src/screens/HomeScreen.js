import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Got to Components Demo"
    />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go To List Demo"
    />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go To Images"
    />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go To Counter"
    />
    <Button
      onPress={() => navigation.navigate('Colors')}
      title="Go To Colors"
    />
        <Button
      onPress={() => navigation.navigate('Square')}
      title="Go To Square"
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
