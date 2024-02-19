import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
export default function SidebarMain({ webViewRef }) {
  const pressHandler = (path: string) => {
    webViewRef.current.postMessage({ data: path });
  };

  return (
    <View style={styles.main}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/search")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icon/search.png")}
          />
          <Text style={styles.describe}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/wordseed")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icon/lightbulb.png")}
          />
          <Text style={styles.describe}>말씨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/follow/1")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icon/artist.png")}
          />
          <Text style={styles.describe}>관심작가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/alram")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icon/notification.png")}
          />
          <Text style={styles.describe}>알람</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/settings")}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/icon/settings.png")}
          />
          <Text style={styles.describe}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
