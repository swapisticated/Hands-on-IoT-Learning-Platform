import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const TenthGradeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [downloadedVideos, setDownloadedVideos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videoCollection = await firestore().collection('10thGradeViedeos').get();
        const videoList = videoCollection.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || 'Unknown Video',
            url: data.url || '',
          };
        });
  
        // Sort the videos based on the chapter number
        const sortedVideos = videoList.sort((a, b) => {
          const numA = parseInt(a.name.match(/\d+/)); // Extract number from "Chapter X"
          const numB = parseInt(b.name.match(/\d+/)); // Extract number from "Chapter X"
          return numA - numB; // Sort numerically
        });
  
        const uniqueVideos = Array.from(new Map(sortedVideos.map(video => [video.id, video])).values());
        setVideos(uniqueVideos);
  
        const storedVideos = await AsyncStorage.getItem('downloadedVideos');
        const parsedStoredVideos = storedVideos ? JSON.parse(storedVideos) : [];
        setDownloadedVideos(parsedStoredVideos);
      } catch (error) {
        console.error("Error fetching videos: ", error);
        Alert.alert("Error fetching videos", error.message);
      }
    };
  
    fetchVideos();
  }, []);
  
  const downloadVideo = async (video) => {
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${video.name}.mp4`;

    try {
      const result = await RNFS.downloadFile({
        fromUrl: video.url,
        toFile: downloadDest,
      }).promise;

      if (result.statusCode === 200) {
        Alert.alert("Success", "Video downloaded successfully!");

        const newDownloadedVideos = [...downloadedVideos, video.name];
        setDownloadedVideos(newDownloadedVideos);
        await AsyncStorage.setItem('downloadedVideos', JSON.stringify(newDownloadedVideos));
      } else {
        Alert.alert("Error", "Failed to download the video.");
      }
    } catch (error) {
      console.error("Error downloading video: ", error);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-1 bg-[#f3e9f4] p-2">
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {videos.map(video => (
          <TouchableOpacity
            key={video.id}
            className="mb-2 p-4 bg-[#4ca1e0] rounded-lg"
            onPress={() => {
              const localVideoPath = `${RNFS.DocumentDirectoryPath}/${video.name}.mp4`;
              RNFS.exists(localVideoPath).then(exists => {
                if (exists) {
                  navigation.navigate('VideoPlayer', { videoPath: localVideoPath });
                } else {
                  Alert.alert("Video not found", "Please download the video first.");
                }
              });
            }}
          >
            <Text className="text-white font-bold">{video.name}</Text>
            {!downloadedVideos.includes(video.name) && (
              <TouchableOpacity onPress={() => downloadVideo(video)}>
                <Text className="text-yellow-300">Download</Text>
              </TouchableOpacity>
            )}
            {downloadedVideos.includes(video.name) && (
              <Text className="text-green-300">Downloaded</Text>
            )}
          </TouchableOpacity>
        ))}
        {videos.length === 0 && (
          <Text className="text-center text-gray-600">No videos available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TenthGradeVideos;
