import useWebViewStack from "hooks/useWebViewStack";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";
import Sidebar from "components/sidebar/sidebar";

export default function Page() {
  const [webViewRef, setNavState] = useWebViewStack();
  const [uri, setUri] = useState("http://172.30.1.52:3000/wordseed/");
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOnMessage = (e) => {
    // console.log(e.nativeEvent.data);
    setShowSidebar(true);
  };

  const handleTouchEnd = () => {
    setShowSidebar(false);
  };

  useEffect(() => {
    setShowSidebar(false);
  }, [uri]);
  return (
    <View style={[styles.screen, showSidebar && styles.screenDarker]}>
      {showSidebar && <Sidebar webViewRef={webViewRef} />}
      <WebView
        style={[styles.container, showSidebar && styles.applySlidebarMode]}
        ref={webViewRef}
        source={{ uri: uri }}
        onMessage={handleOnMessage}
        onTouchStart={handleTouchEnd}
        onNavigationStateChange={(e) => {
          setNavState(e);
          setUri(e.url);
        }}
        allowsBackForwardNavigationGestures={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenDarker: {
    backgroundColor: "black",
  },
  nav: {
    height: 60,
    backgroundColor: "black",
    flexDirection: "row",
  },
  link: {
    backgroundColor: "white",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  applySlidebarMode: {
    opacity: 0.5,
    // pointerEvents: "none",
  },
});

{
  /* <View style={styles.nav}>
  <TouchableOpacity style={styles.link} onPress={mailLink}>
  <Text>네이버 메일</Text>
  </TouchableOpacity>
  </View> */
}

// const mailLink = () => {
//   setUri("https://www.naver.com");
// };
