import React, { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import color from "../misc/color";
import { Asset } from "expo-media-library";

interface Props {
  filename: string;
  duration: number;
  onDotsPress: () => void;
}

const AudioListItem: FC<Props> = ({ filename, duration, onDotsPress }) => {
  const getSongDuration = (duration: number) => {
    let hrs = duration / 60;
    let min = hrs.toString().split(".")[0];
    let percent = parseInt(hrs.toString().split(".")[1].slice(0, 2));
    let sec = Math.ceil((60 * percent) / 100);
    if (parseInt(min) < 10 && sec < 10) {
      return `0${min}:0${sec}`;
    }
    if (parseInt(min) < 10) {
      return `0${min}:${sec}`;
    }
    if (sec < 10) {
      return `${min}:0${sec}`;
    }
    return `${min}:${sec}`;
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.thumbnail}>
            <Text style={styles.thumbnailText}>
              <Feather name="music" size={24} />
            </Text>
          </View>
          <View style={styles.titleContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {filename}
            </Text>
            <Text numberOfLines={1} style={styles.timeText}>
              {getSongDuration(duration!)}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Entypo
            onPress={onDotsPress}
            name="dots-three-vertical"
            size={20}
            color={color.FONT_MEDIUM}
          />
        </View>
      </View>
    </>
  );
};

export default AudioListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
    width: Dimensions.get("window").width - 30,
    marginVertical: 7,
    // borderBottomWidth: 1,
    borderBottomColor: color.FONT_LIGHT,
    padding: 5,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rightContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  thumbnail: {
    height: 50,
    flexBasis: 50,
    backgroundColor: color.FONT_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  thumbnailText: {
    fontSize: 22,
    fontWeight: "bold",
    color: color.FONT,
  },
  titleContainer: {
    width: Dimensions.get("window").width - 150,
    paddingLeft: 10,
  },
  title: {
    fontSize: 14,
    color: color.FONT,
  },
  sperator: {
    backgroundColor: "#333",
    opacity: 0.3,
    height: 0.5,
    width: Dimensions.get("window").width - 80,
    alignSelf: "center",
    marginTop: 10,
  },
  timeText: {
    fontSize: 13,
    color: color.FONT_LIGHT,
  },
});
