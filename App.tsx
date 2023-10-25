import React from "react";
import { Platform } from "react-native";
import ContextDemo from "./ContextDemo";
import IPhone14Device from "./iPhoneDevice";

function WrappedApp() {
  const app = <ContextDemo />;
  if (Platform.OS === "web") {
    return <IPhone14Device>{app}</IPhone14Device>;
  } else {
    return app;
  }
}

export default WrappedApp;
