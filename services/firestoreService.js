import firestore from '@react-native-firebase/firestore';

export const fetchVideos = async () => {
  const videoCollection = await firestore().collection('videos').get();
  return videoCollection.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};
