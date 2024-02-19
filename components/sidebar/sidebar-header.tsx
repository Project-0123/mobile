import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./style";
export default function SidebarHeader({ webViewRef }) {
  // user id 를 data에 입력해야 함
  return (
    <View style={styles.header}>
      <Text style={styles.headerFont}>작가명</Text>
      <TouchableOpacity
        style={styles.headerProfile}
        onPress={() => webViewRef.current.postMessage({ data: "/profile/1" })}
      >
        <Text style={styles.headerFont}>프로필</Text>
        <Image
          style={styles.icon}
          source={require("../../assets/icon/right-arrow.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
