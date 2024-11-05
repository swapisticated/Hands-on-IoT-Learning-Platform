import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

const LabScreen = ({ navigation }) => {
  const cards = [
    { id: 1, title: 'Project For You Tutorials', screenName: 'ProjectVideos' },
    { id: 2, title: 'Components Tutorial', screenName: 'ComponentVideos', componentTitle: 'ESP 32' },
    { id: 3, title: 'Mechanical Toy Tutorial', screenName: 'MechanicalToyVideos' },
    { id: 4, title: 'Electronics Toy', screenName: 'ElectronicsToyVideos' },
    { id: 5, title: 'Paper Circuit Tutorials', screenName: 'PaperCircuitVideos' },
    { id: 6, title: 'How To Handle Tools', screenName: 'ToolsVideos' },
    { id: 7, title: 'How To Solder', screenName: 'SolderVideos' },
  ];

  return (
    <View className="flex-1 bg-[#f9f1eb] pt-24">
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 20 }} 
        showsVerticalScrollIndicator={false} 
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between px-4 ">
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              onPress={() => {
                navigation.navigate(card.screenName, { componentTitle: card.componentTitle });
              }}
              className="w-[30%] aspect-square bg-[#E7DDD6] mb-2 rounded-lg justify-center items-center"
            >
              <Text className="text-slate-600 text-center font-bold text-2xl">
                {card.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default LabScreen;
