// CardComponent.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const CardComponent = ({ imagePath, title, date, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: imagePath }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff', // White background for the card
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 2, // Add shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  date: {
    color: '#2e3191', // Custom color for the date
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#404041', // Custom color for the title
  },
});

export default CardComponent;
