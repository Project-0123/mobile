import { Text, View } from "react-native";
import styles from "./style";
export default function SidebarMain() {
  return (
    <View style={styles.main}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>검색</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>말씨</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>관심작가 작품</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>알람</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>설정</Text>
        </View>
      </View>
    </View>
  );
}
