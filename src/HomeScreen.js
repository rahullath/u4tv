import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://picsum.photos/200/300'}}
        style={styles.image}
      />
      <Text style={styles.text}>Film & Tv Platform</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.scrollText}>Beta Mode</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  scrollView: {
    marginTop: 10,
    width: 300,
    height: 100,
    backgroundColor: 'lightgray',
  },
  scrollText: {
    fontSize: 16,
    padding: 10,
  },
});

export default HomeScreen;
