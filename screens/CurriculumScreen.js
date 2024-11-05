import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchComponent from '../components/SearchComponent';

const CurriculumScreen = () => {
  const navigation = useNavigation();
  const cards = [
    { id: 1, title: '7th Grade Curriculum', screen: 'SeventhGradeVideos' },
    { id: 2, title: '8th Grade Curriculum', screen: 'EighthGradeVideos' },
    { id: 3, title: '9th Grade Curriculum', screen: 'NinthGradeVideos' },
    { id: 4, title: '10th Grade Curriculum', screen: 'TenthGradeVideos' },
  ];

  return (
    <View className="flex-1 bg-[#f9f1eb] p-2  justify-center ">
      <Text className=' text-6xl text-slate-600 my-10'>Courses</Text>
      <View className="flex flex-row flex-wrap justify-between">
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            onPress={() => navigation.navigate(card.screen)} // Update navigation to point to the specific screen
            className="w-[47%] h-[50%] bg-[#E7DDD6] m-2 rounded-2xl justify-center items-center"
          >
            <Text className="text-slate-600 text-center font-bold text-2xl">
              {card.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CurriculumScreen;
