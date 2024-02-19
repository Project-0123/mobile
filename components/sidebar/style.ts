import { StyleSheet } from "react-native";

const white = "#f8f8f8";
const black = "#484848";
const h3 = 18;
const iconSize = 30;

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "70%",
    backgroundColor: white,
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
    paddingLeft: "10%",
    paddingRight: "5%",
    borderBottomWidth: 1,
    borderBlockColor: "black",
  },
  headerFont: {
    fontSize: h3,
    color: black,
  },
  headerProfile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  main: {
    display: "flex",
    height: "90%",
    width: "100%",
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
    borderBottomWidth: 0.3,
    borderBlockColor: "black",
  },
  describe: {
    flexGrow: 1,
    fontSize: h3,
    color: black,
  },
  icon: {
    width: iconSize,
    height: iconSize,
  },
});

export default styles;
