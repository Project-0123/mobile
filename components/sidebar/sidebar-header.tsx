import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
export default function SidebarHeader({ setUri }) {
  return (
    <View style={styles.header}>
      <Text>작가명</Text>
      <TouchableOpacity
        onPress={() => setUri("http://172.30.1.52:3000/profile/1")}
      >
        <Text>프로필</Text>
      </TouchableOpacity>
    </View>
  );
}
