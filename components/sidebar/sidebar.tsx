import { View } from "react-native";
import styles from "./style";
import SidebarHeader from "./sidebar-header";
import SidebarMain from "./sidebar-main";
export default function Sidebar() {
  return (
    <View style={styles.sidebar}>
      <SidebarHeader />
      <SidebarMain />
    </View>
  );
}
