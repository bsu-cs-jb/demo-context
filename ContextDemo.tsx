import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import {
  BigButton,
  FlexFill,
  LabelText,
  LctHorzContainer,
  LctInput,
  SubtitleText,
  TitleText,
} from "./Shared";
import { createContext, useContext, useState } from "react";
import sharedStyles from "./styles";
import { EditWatchlistModal } from "./EditWatchlistModal";
import { genid, log, range } from "./utils";

// Single screen context
const SimpleContext = createContext<NameAge>({ name: "", age: 0 });

function PersonView() {
  const { name, age } = useContext(SimpleContext);
  return (
    <View>
      <LabelText>Name: {name}</LabelText>
      <LabelText>Age: {age}</LabelText>
    </View>
  );
}

interface NameAge {
  name: string;
  age: number;
}

export default function ContextDemo() {
  const [name, setName] = useState("Chuckie");
  const [age, setAge] = useState(30);

  const contextValue = {
    name,
    age,
  };

  return (
    <SimpleContext.Provider value={contextValue}>
      <View style={styles.container}>
        <TitleText>Context Demo</TitleText>
        <View style={[sharedStyles.box, { flex: 1 }]}>
          <SubtitleText>Input</SubtitleText>
          <LctHorzContainer>
            <LabelText>Name:</LabelText>
            <LctInput value={name} onChangeText={setName} />
          </LctHorzContainer>
          <LctHorzContainer>
            <LabelText>Age:</LabelText>
            <LabelText>{age}</LabelText>
            <BigButton
              style={styles.plusMinus}
              title="-"
              onPress={() => setAge((age) => age - 5)}
            />
            <BigButton
              style={styles.plusMinus}
              title="+"
              onPress={() => setAge((age) => age + 5)}
            />
          </LctHorzContainer>
        </View>
        <View style={[sharedStyles.box, { flex: 1 }]}>
          <SubtitleText>Output</SubtitleText>
          <PersonView />
        </View>
        <StatusBar style="auto" />
      </View>
    </SimpleContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdb",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 20,
    paddingHorizontal: 10,
    gap: 8,
  },
  plusMinus: {
    paddingHorizontal: 15,
  },
});
