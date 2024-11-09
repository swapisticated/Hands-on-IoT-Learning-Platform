import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, Image } from 'react-native'; // Import Image
import Fuse from 'fuse.js'; // Fuzzy search

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  // Mock data to search
  const data = [
    { id: 1, title: 'Curriculum' },
    { id: 2, title: 'Buzzer' },
    { id: 3, title: 'Debouncing in React' },
    { id: 4, title: 'Searching with Fuse.js' },
    { id: 5, title: 'Navigation in React Native' },
  ];

  // Fuse.js setup for fuzzy search
  const fuse = new Fuse(data, {
    keys: ['title'],
    threshold: 0.3, // Adjust for fuzzy match sensitivity
  });

  // Debouncing and updating results
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length > 0) {
        const fuseResults = fuse.search(query).map(({ item }) => item);
        setResults(fuseResults);
      } else {
        setResults([]);
      }
    }, 300); // 300ms debounce delay
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleInputChange = (text) => {
    setQuery(text);
    if (!history.includes(text) && text !== '') {
      setHistory([text, ...history]); // Store search history
    }
  };

  return (
    <View className="absolute justify-center items-center rounded-2xl w-[63.5%] inset-x-32 top-5 flex-1 z-30 bg-[#232B32] p-2 ml-3">
      <View className="relative w-full h-12">
        <Image
            source={require('../public/icons/search.png')} // Replace with your icon URL or local path
            className="absolute top-3 left-4 w-5 h-5"
        />

        {/* Search Input */}
        <TextInput
          className="rounded-3xl w-full text-black h-full px-12 placeholder-red-200"  // Adjust padding to make space for icon
          placeholder="Search..."
          placeholderTextColor="#6B7280"
          value={query}
          onChangeText={handleInputChange}
        />
      </View>

      {/* Search Results */}
      {query.length > 0 && (
        <FlatList
          
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity className="bg-gray-200 rounded-xl py-2 px-4 my-2 mx-1">
              <Text className="text-gray-800">{item.title}</Text>
            </TouchableOpacity>
          )}
          ListEmptyComponent={<Text className="text-center text-gray-500 mt-5">No results found</Text>}
          className="absolute top-16 left-0 right-0 bg-white rounded-2xl shadow-lg z-10" // Adjusted position
        />
      )}
    </View>
  );
};

export default SearchComponent;
