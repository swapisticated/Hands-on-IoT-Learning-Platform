import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import LandingPage from './screens/LandingPage'; // Adjust the path as needed
import CurriculumScreen from './screens/CurriculumScreen';
import LabScreen from './screens/LabScreen';
import ScanScreen from './screens/ScanScreen';
import ComponentVideosScreen from './screens/ComponentVideosScreen'; // Import your ComponentVideosScreen
import firebase from '@react-native-firebase/app';
import "./global.css";
import BlankScreen from './screens/BlankScreen';
import VideoPlayerScreen from './components/VideoPlayerScreen';
import SeventhGradeVideos from './screens/SeventhGradeVideos';
import EighthGradeVideos from './screens/EighthGradeVideos';
import NinthGradeVideos from './screens/NinthGradeVideos';
import TenthGradeVideos from './screens/TenthGradeVideos';
import PersistentLayout from './components/PersistentLayout';
import Orientation from 'react-native-orientation-locker';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Add your Firebase configuration here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const App = () => {
  useEffect(() => {
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    Orientation.lockToLandscape();

    // Clean up: unlock orientation on component unmount
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.select({ ios: 100, android: 0 })} // Adjust this value as needed
      className="flex-1" // Full height for the keyboard avoiding view
    >
      <NavigationContainer>
        <PersistentLayout>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={LandingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Curriculum" component={CurriculumScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Lab" component={LabScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Scan" component={ScanScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ComponentVideos" component={ComponentVideosScreen} options={{ headerShown: true }} />
            <Stack.Screen name="ProjectVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MechanicalToyVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ElectronicsToyVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="PaperCircuitVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ToolsVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SolderVideos" component={BlankScreen} options={{ headerShown: false }} />
            <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SeventhGradeVideos" component={SeventhGradeVideos} />
            <Stack.Screen name="EighthGradeVideos" component={EighthGradeVideos} options={{ title: '8th Grade Videos' }} />
            <Stack.Screen name="NinthGradeVideos" component={NinthGradeVideos} options={{ title: '9th Grade Videos' }} />
            <Stack.Screen name="TenthGradeVideos" component={TenthGradeVideos} options={{ title: '10th Grade Videos' }} />
          </Stack.Navigator>
        </PersistentLayout>
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
};

export default App;
