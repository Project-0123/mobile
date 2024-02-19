import { Text, View, TouchableOpacity } from "react-native";
import styles from "./style";
export default function SidebarMain({ setUri }) {
  return (
    <View style={styles.main}>
      <View style={styles.contentWrapper}>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setUri("http://172.30.1.52:3000/search/")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setUri("http://172.30.1.52:3000/wordseed/")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>말씨</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setUri("http://172.30.1.52:3000/follow/")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>관심작가</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setUri("http://172.30.1.52:3000/alram/")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>알람</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.content}
          onPress={() => setUri("http://172.30.1.52:3000/settings/")}
        >
          <Text style={styles.icon}>아이콘</Text>
          <Text style={styles.describe}>설정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
