import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import AudioListItem from "./app/components/audio-list-item.component";
import AudioProvider from "./app/context/audio-provider";
import AppNavigator from "./app/navigation/app-navigator.component";

export default function App() {
  return (
    <AudioProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AudioProvider>
  );
}
