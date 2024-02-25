import useWebViewStack from "hooks/useWebViewStack";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";
import Sidebar from "components/sidebar/sidebar";

export default function Page() {
  const [webViewRef, setNavState] = useWebViewStack();
  const [uri, setUri] = useState(
    `${process.env.EXPO_PUBLIC_LOCAL_IP}:3000/create/한 걸음`
  );
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOnMessage = (e) => {
    const message = e.nativeEvent.data;

    switch (message) {
      case "Open Sidebar":
        setShowSidebar(true);
        break;
      default:
        break;
    }
  };

  const handleTouchEnd = (e) => {
    setShowSidebar(false);
  };

  useEffect(() => {
    setShowSidebar(false);
  }, [uri]);

  return (
    <View style={[styles.screen, showSidebar && styles.screenDarker]}>
      {showSidebar && <Sidebar webViewRef={webViewRef} />}
      <View style={[styles.webviewWrapper]} onTouchStart={handleTouchEnd}>
        <WebView
          style={[styles.container, showSidebar && styles.applySlidebarMode]}
          hideKeyboardAccessoryView={true}
          ref={webViewRef}
          source={{ uri: uri }}
          onMessage={handleOnMessage}
          onNavigationStateChange={(e) => {
            setNavState(e);
            setUri(e.url);
          }}
          allowsBackForwardNavigationGestures={true}
        />
      </View>
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
  webviewWrapper: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  applySlidebarMode: {
    opacity: 0.5,
    pointerEvents: "none",
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
