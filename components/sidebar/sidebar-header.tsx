import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
export default function SidebarHeader({ webViewRef }) {
  // user id 를 data에 입력해야 함
  return (
    <View style={styles.header}>
      <Text>작가명</Text>
      <TouchableOpacity
        onPress={() => webViewRef.current.postMessage({ data: "/profile/1" })}
      >
        <Text>프로필</Text>
      </TouchableOpacity>
    </View>
  );
}
