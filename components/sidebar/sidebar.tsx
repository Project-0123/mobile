import { View } from "react-native";
import styles from "./style";
import SidebarHeader from "./sidebar-header";
import SidebarMain from "./sidebar-main";
export default function Sidebar({ setUri }) {
  return (
    <View style={styles.sidebar}>
      <SidebarHeader setUri={setUri} />
      <SidebarMain setUri={setUri} />
    </View>
  );
}
