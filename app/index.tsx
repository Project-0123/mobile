import useWebViewStack from "hooks/useWebViewStack";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Page() {
  const [ref, setNavState] = useWebViewStack();
  const [uri, setUri] = useState("https://www.youtube.com/");

  const mailLink = () => {
    setUri("https://www.naver.com");
  };

  return (
    <>
      <View style={styles.nav}>
        <TouchableOpacity style={styles.link} onPress={mailLink}>
          <Text>네이버 메일</Text>
        </TouchableOpacity>
      </View>
      <WebView
        style={styles.container}
        ref={ref}
        source={{ uri: uri }}
        onNavigationStateChange={(e) => {
          setNavState(e);
          setUri(e.url);
        }}
        allowsBackForwardNavigationGestures={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
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
});

