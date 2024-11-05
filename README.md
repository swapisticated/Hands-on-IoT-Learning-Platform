# Portable Tinkering Lab

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Overview
The Portable Tinkering Lab is a mobile application developed in React Native designed to provide students and electronics enthusiasts with a hands-on learning experience. The app features video tutorials, component recognition using machine learning, and a user-friendly interface for exploring various electronic components.

## Features
- **Offline Video Playback**: Users can download and play video tutorials without an internet connection.
- **Component Scanning**: Utilize machine learning models to identify electronic components like buzzers and ultrasonic sensors.
- **Interactive Dashboard**: Navigate through different sections, including curriculum, lab activities, and scanning tools.
- **User Profiles**: Personalize user experience with profiles and settings.

## Technologies Used
- **React Native**: Framework for building the mobile application.
- **Firebase**: Backend for storing and retrieving video files.
- **Teachable Machine**: For machine learning model integration to recognize electronic components.
- **react-native-video**: For handling video playback in the app.
- **TensorFlow.js**: For using machine learning models in the app.

## Installation
To set up the Portable Tinkering Lab application, follow these steps:

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/swapisticated/portable-tinkering-lab.git
   

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
cd PortableTinkeringLab
npm install
npx react-native start

```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
npx react-native run-android  # For Android
npx react-native run-ios      # For iOS

```

## Usage

After successfully installing and running the application, users can explore various sections:

    Curriculum: Access video tutorials and educational materials.
    Lab: Participate in interactive lab sessions with hands-on activities.
    Scan: Use the camera to scan and identify electronic components.

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


