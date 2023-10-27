import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SubtitleText, TitleText } from "./Shared";
import sharedStyles from "./styles";
import { NameAgeProvider } from "./NameAgeContext";
import { EmployeeView } from "./EmployeeView";
import { EmployeeEditView } from "./EmployeeEditView";

export default function ContextDemo() {
  return (
    <NameAgeProvider>
      <View style={styles.container}>
        <TitleText>Context Demo</TitleText>
        <View style={[sharedStyles.box, { flex: 1 }]}>
          <SubtitleText>Input</SubtitleText>
          <EmployeeEditView />
        </View>
        <View style={[sharedStyles.box, { flex: 1 }]}>
          <SubtitleText>Output</SubtitleText>
          {/* Display the values of the context in the EmployeeView */}
          <EmployeeView />
        </View>
        <StatusBar style="auto" />
      </View>
    </NameAgeProvider>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdb",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 10,
    gap: 8,
  },
});
