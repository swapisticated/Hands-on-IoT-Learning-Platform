import RNFS from 'react-native-fs';

export const downloadVideo = async (videoUrl) => {
  const fileName = videoUrl.split('/').pop(); // Extract file name from URL
  const localFilePath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

  try {
    const downloadResult = await RNFS.downloadFile({
      fromUrl: videoUrl,
      toFile: localFilePath,
    }).promise;

    if (downloadResult.statusCode === 200) {
      console.log('Video downloaded successfully:', localFilePath);
      return localFilePath; // Return the local file path
    } else {
      console.error('Download failed:', downloadResult.statusCode);
    }
  } catch (error) {
    console.error('Error downloading video:', error);
  }
};
