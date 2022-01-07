import { Asset } from "expo-media-library";
import React, { useCallback, useContext, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AudioListItem from "../components/audio-list-item.component";
import OptionsModal from "../components/options-modal.component";
import Screen from "../components/screen.component";
import { AudioContext } from "../context/audio-provider";

const MusicListScreen = () => {
  const [showOption, setShowOption] = useState<boolean>(false);
  const { audioFiles } = useContext(AudioContext);
  const [currentItem, setCurrentItem] = useState<Asset>();

  const showOptionModal = useCallback((item: Asset) => {
    setCurrentItem(item);
    setShowOption(true);
  }, []);

  const closeOptionModal = useCallback(() => {
    setShowOption(false);
  }, []);

  return (
    <Screen>
      <FlatList
        data={audioFiles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AudioListItem
            filename={item.filename}
            duration={item.duration}
            onDotsPress={() => showOptionModal(item)}
          />
        )}
      />
      <OptionsModal
        onPlayListPress={() => console.log("Added")}
        onPlayPress={() => console.log("playing")}
        currentItem={currentItem!}
        closeOptionModal={closeOptionModal}
        visible={showOption}
      />
    </Screen>
  );
};

export default MusicListScreen;

const styles = StyleSheet.create({
  itemStyle: {
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
