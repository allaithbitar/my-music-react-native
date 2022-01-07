import { Asset } from "expo-media-library";
import React, { FC } from "react";
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import color from "../misc/color";

interface Props {
  visible: boolean;
  currentItem: Asset;
  closeOptionModal: () => void;
  onPlayPress: () => void;
  onPlayListPress: () => void;
}

const OptionsModal: FC<Props> = ({
  currentItem,
  visible,
  closeOptionModal,
  onPlayPress,
  onPlayListPress,
}) => {
  if (!currentItem) return null;
  return (
    <>
      <Modal animationType="slide" visible={visible} transparent>
        <View style={styles.modal}>
          <Text numberOfLines={2} style={styles.title}>
            {currentItem.filename!}
          </Text>
          <View style={styles.optionContainer}>
            <TouchableOpacity onPress={onPlayPress}>
              <Text style={styles.option}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPlayListPress}>
              <Text style={styles.option}>Add to play list</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={closeOptionModal}>
          <View style={styles.modalBg} />
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: color.APP_BG,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  optionContainer: {
    padding: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 20,
    paddingBottom: 0,
    color: color.FONT_MEDIUM,
  },
  option: {
    fontSize: 13,
    fontWeight: "bold",
    color: color.FONT,
    paddingVertical: 10,
    letterSpacing: 1,
  },
  modalBg: {
    position: "absolute",
    zIndex: -1,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: color.MODAL_BG,
  },
});

export default OptionsModal;
