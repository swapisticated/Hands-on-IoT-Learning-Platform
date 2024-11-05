import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const VideoPlayerScreen = ({ route }) => {
  const { videoPath } = route.params; // Get the local path from navigation params
  const videoRef = useRef(null); // Create a ref for the Video component

  useEffect(() => {
    // Lock orientation to landscape on mount
    Orientation.lockToLandscape();

    // Unlock orientation when the component unmounts
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const enterFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef} // Attach the ref to the Video component
        source={{ uri: videoPath }} // Use the local path
        style={styles.video}
        controls={true}
        resizeMode="contain" // Maintain aspect ratio
        onLoad={() => {
          // Automatically enter fullscreen when the video loads
          enterFullScreen();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set background to black for better video visibility
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white', // Change title color for visibility
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayerScreen;
