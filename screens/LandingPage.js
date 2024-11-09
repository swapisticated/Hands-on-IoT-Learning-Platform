import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchComponent from '../components/SearchComponent';
import { ScrollView } from 'react-native-gesture-handler';

// Dummy categories and card data
const categories = [
  { id: 'all', name: 'All' },
  { id: 'it', name: 'IT & Software' },
  { id: 'media', name: 'Media Training' },
  { id: 'business', name: 'Business' },
  { id: 'interior', name: 'Interior' },
];

const cards = [
  { id: 1, category: 'it', title: 'Video Boot Camp', students: 9530 },
  { id: 2, category: 'business', title: 'Powerful Business Writing', students: 1463 },
  { id: 3, category: 'media', title: 'Certified Six Sigma', students: 6726 },
  { id: 4, category: 'interior', title: 'How to Design', students: 8735 },
  { id: 5, category: 'hey', title: 'How to ', students: 1 },
  { id: 6, category: 'hey', title: 'How to not ', students: 1 },
];

const LandingPage = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter cards based on selected category
  const filteredCards = selectedCategory === 'all'
    ? cards
    : cards.filter(card => card.category === selectedCategory);

  return (
    <View className="flex-1 bg-[#0A131A]">
      <View className='w-full top-24 flex-1 ' >
      
        <View className="mb-2 h-12  w-full">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }} fadingEdgeLength={60}>
            {categories.map(category => (
              <TouchableOpacity
                key={category.id}
                className={`mr-3 px-4 py-2 rounded-full justify-center ${selectedCategory === category.id ? 'bg-[#0C3028]' : 'bg-[#232B32]'}`}
                onPress={() => setSelectedCategory(category.id)}
              >
                <Text className={selectedCategory === category.id ? 'text-green-300' : 'text-white'}>
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <FlatList
          className='flex-1 w-full h-20 py-2'
          data={filteredCards}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 4, paddingBottom: 20, justifyContent:"space-between" }} 
          numColumns={2} 
          fadingEdgeLength={20}
          showsVerticalScrollIndicator={false}

          renderItem={({ item }) => (
            <View className="flex-1 mb-4 px-2">  
              <TouchableOpacity
                className="flex-1 bg-[#222A31] rounded-3xl  justify-center items-center h-40"
                onPress={() => navigation.navigate('DetailsScreen', { card: item })}
              >
                <Text className="text-slate-200 text-center font-bold text-xl">
                  {item.title}
                </Text>
                <Text className="text-slate-300 text-center">{item.students} students</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <Text className='text-slate-600 text-3xl mt-4 ml-3'>Conitinue Watching</Text>
           <FlatList
          className='flex-1 w-full h-20 my-2  py-2'
          data={filteredCards}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }} 
          numColumns={2} 
          fadingEdgeLength={5}
          renderItem={({ item }) => (
            <View className="flex-1 mb-4 px-2">  
              <TouchableOpacity
                className="flex-1 bg-[#e7ddd6] rounded-3xl justify-center items-center h-36"
                onPress={() => navigation.navigate('DetailsScreen', { card: item })}
              >
                <Text className="text-slate-500 text-center font-bold text-xl">
                  {item.title}
                </Text>
                <Text className="text-black text-center">{item.students} students</Text>
              </TouchableOpacity>
            </View>
          )}
        /> */}

      </View>
    </View>
  );
};

export default LandingPage;
