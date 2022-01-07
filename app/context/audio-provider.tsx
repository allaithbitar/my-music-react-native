import React, { Component, createContext } from "react";
import { Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

type defaultProps = {
  children: Component;
};
type defaultState = {
  audioFiles: MediaLibrary.Asset[];
};
export const AudioContext = createContext<defaultState>({
  audioFiles: [],
});
export default class AudioProvider extends Component<any, defaultState> {
  constructor(props: defaultProps) {
    super(props);
    this.state = {
      audioFiles: [],
    };
  }

  getAudioFiles = async () => {
    let media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio,
    });
    media = await MediaLibrary.getAssetsAsync({
      mediaType: MediaLibrary.MediaType.audio,
      first: media.totalCount,
    });
    this.setState({ ...this.state, audioFiles: media.assets });
  };

  getPermission = async () => {
    const permission = await MediaLibrary.getPermissionsAsync();
    console.log(permission);

    if (permission.granted) {
      this.getAudioFiles();
    }
    if (!permission.granted && permission.canAskAgain) {
      const { status, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync();
      if (status === "denied" && canAskAgain) {
        this.permissionAlert();
      }
      if (status === "denied" && !canAskAgain) {
        this.permissionAlert();
      }
      if (status === "granted") {
        this.getAudioFiles();
      }
    }
  };

  permissionAlert = () => {
    Alert.alert("Permission Required", "The App needs to read audio files !", [
      {
        text: "I am ready",
        onPress: () => this.getPermission(),
      },
      { text: "cancle", onPress: () => this.permissionAlert() },
    ]);
  };

  componentDidMount() {
    this.getPermission();
  }
  render() {
    return (
      <AudioContext.Provider value={{ audioFiles: this.state.audioFiles }}>
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}
