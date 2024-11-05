import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchComponent from './SearchComponent';

const PersistentLayout = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 flex-row bg-[#f9f1eb]">
      <SearchComponent />
      <View className="w-full h-28 bg-[#498b7c] bottom-0 absolute z-40  py-5 flex-row  justify-center gap-36 items-center ">
        <TouchableOpacity className='bg-[#F9F1EB] rounded-full w-14 aspect-square justify-center items-center' onPress={() => navigation.navigate('Landing')}>
          <Image
            source={require('../public/icons/apps(2).png')} // Replace with your icon URL or local path
            className="h-6 aspect-square"
          />
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F9F1EB] rounded-full w-14 aspect-square justify-center items-center' onPress={() => navigation.navigate('Curriculum')}>
          <Image
            source={require('../public/icons/notebook-alt.png')} // Replace with your icon URL or local path
            className="h-6 aspect-square"
          />
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F9F1EB] rounded-full w-14 aspect-square justify-center items-center' onPress={() => navigation.navigate('Lab')}>
          <Image
            source={require('../public/icons/microchip.png')} // Replace with your icon URL or local path
            className="h-6 aspect-square"
          />
          {/* <Text className="text-white text-lg my-5 text-center">Lab</Text> */}
        </TouchableOpacity>
        <TouchableOpacity className='bg-[#F9F1EB] rounded-full w-14 aspect-square justify-center items-center' onPress={() => navigation.navigate('Scan')}>
          <Image
            source={require('../public/icons/qr-scan.png')} // Replace with your icon URL or local path
            className="h-6 aspect-square"
          />
        </TouchableOpacity>
      </View>

      <View className="flex-1 p-0 bg-[#f3f3f3]">
        {children}
      </View>
      {/* <View className='bg-[#e7ddd6] w-1/4 bottom-10  h-[84vh] rounded-2xl mr-4 top-24'>
      </View> */}
    </View>
  );
};

export default PersistentLayout;
