import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MusicListScreen from "../screens/music-list.screen";
import MusicPlayerScreen from "../screens/music-player.screen";
import MusicPlayList from "../screens/music-play-list.screen";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="MusicList"
        component={MusicListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="headset" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MusicPlayer"
        component={MusicPlayerScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="compact-disc" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MusicPlayList"
        component={MusicPlayList}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-music" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
