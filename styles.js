import { Platform, StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "ghostwhite",
    ...Platform.select({
      ios: { paddingTop: 40 },
      android: { paddingTop: StatusBar.currentHeight },
    }),
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    flexShrink: 1,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center"
  },
  box: {
    width: 100,
    maxHeight: 100,
    height: 100,
    flexShrink: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray",
    margin: 10
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold",
  },
});