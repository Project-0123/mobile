import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "70%",
    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    zIndex: 100,
    overflow: "hidden",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    width: "100%",
    paddingHorizontal: "10%",
    borderBottomWidth: 0.5,
    borderBlockColor: "black",
  },
  main: {
    display: "flex",
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: "10%",
    alignItems: "center",
  },
  contentWrapper: {
    display: "flex",
    width: "80%",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    gap: 40,
    backgroundColor: "white",
    borderBottomWidth: 0.3,
    borderBlockColor: "black",
  },
  describe: {
    flexGrow: 1,
  },
  icon: {
    // position: "absolute",
    // left: 0,
  },
});

export default styles;
