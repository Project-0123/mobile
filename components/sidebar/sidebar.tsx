import { View } from "react-native";
import styles from "./style";
import SidebarHeader from "./sidebar-header";
import SidebarMain from "./sidebar-main";
export default function Sidebar({ webViewRef }) {
  return (
    <View style={styles.sidebar}>
      <SidebarHeader webViewRef={webViewRef} />
      <SidebarMain webViewRef={webViewRef} />
    </View>
  );
}
