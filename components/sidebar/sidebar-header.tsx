import { Text, View } from "react-native";
import styles from "./style";
export default function SidebarHeader() {
  return (
    <View style={styles.header}>
      <Text>작가명</Text>
      <Text>프로필</Text>
    </View>
  );
}
