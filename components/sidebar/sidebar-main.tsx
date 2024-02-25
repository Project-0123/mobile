import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";

const icons = {
  search: require("../../assets/icon/search.png"),
  wordseed: require("../../assets/icon/wordseed.png"),
  follow: require("../../assets/icon/follow.png"),
  alram: require("../../assets/icon/alram.png"),
  settings: require("../../assets/icon/settings.png"),
};

const menus = {
  search: "검색",
  wordseed: "말씨",
  follow: "관심작가",
  alram: "알람",
  settings: "설정",
};

export default function SidebarMain({ webViewRef }) {
  const pressHandler = (path: string) => {
    console.log(path);
    const message = {
      type: "router",
      path: path,
    };
    webViewRef.current.postMessage(JSON.stringify(message));
  };

  return (
    <View style={styles.main}>
      <View style={styles.contentWrapper}>
        {Object.keys(menus).map((menu) => {
          return (
            <TouchableOpacity
              key={menu}
              style={styles.content}
              onPress={() => pressHandler(`/${menu}`)}
            >
              <Image style={styles.icon} source={icons[menu]} />
              <Text style={styles.describe}>{menus[menu]}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
