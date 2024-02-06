import React, { useEffect, useRef, useState } from "react";
import WebView from "react-native-webview";
import { Alert, BackHandler } from "react-native";
import { WebViewNativeEvent } from "react-native-webview/lib/RNCWebViewNativeComponent";

function useWebViewStack() {
  const ref = useRef<WebView>();
  const [navState, setNavState] = useState<WebViewNativeEvent>();

  useEffect(() => {
    const canGoBack = navState?.canGoBack;

    const onPress = () => {
      if (canGoBack) {
        ref?.current?.goBack();
        return true;
      } else {
        return false;
      }
    };

    BackHandler.addEventListener("hardwareBackPress", onPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onPress);
    };
  }, [navState?.canGoBack]);

  return [ref, setNavState] as const;
}

export default useWebViewStack;
