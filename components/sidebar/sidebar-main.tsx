import { Text, View, TouchableOpacity } from "react-native";
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
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/wordseed")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>말씨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/follow/1")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>관심작가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/alram")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>알람</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => pressHandler("/settings")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
