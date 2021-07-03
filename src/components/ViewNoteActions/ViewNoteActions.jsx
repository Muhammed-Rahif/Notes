import React from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Dimensions,
} from "react-native";

export default function ViewNoteActions() {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback>
        <View style={styles.editBtn}>
          <Text style={styles.btnText}>Edit</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.deleteBtn}>
          <Text style={styles.btnText}>Delete</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    top: (Dimensions.get("window").height * 85) / 100,
    shadowColor: "#000",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 12,
    marginLeft: 44,
    marginRight: 44,
    width: Dimensions.get("window").width - 88,
  },
  editBtn: {
    backgroundColor: "#44b158",
    flex: 1,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
  },
  deleteBtn: {
    backgroundColor: "red",
    flex: 1,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
  },
  btnText: {
    color: "white",
    padding: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
});
