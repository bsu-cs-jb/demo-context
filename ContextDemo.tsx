import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  BigButton,
  Form,
  FormColumn,
  FormRow,
  LabelText,
  LctInput,
  SubtitleText,
  TitleText,
} from "./Shared";
import { useState } from "react";
import sharedStyles from "./styles";
import { JobContextProvider } from "./JobContext";
import { NameAgeContext } from "./NameAgeContext";
import { EmployeeView } from "./EmployeeView";

export default function ContextDemo() {
  // state for the NameAgeContext
  const [name, setName] = useState("Chuckie");
  const [age, setAge] = useState(30);

  // state for the JobContext. This will be passed to the provider
  const [title, setTitle] = useState("Software Engineer");
  const [years, setYears] = useState(7);

  return (
    <NameAgeContext.Provider value={{ name, age }}>
      {/* The JobContextProvider accepts title and years as properties */}
      <JobContextProvider title={title} years={years}>
        <View style={styles.container}>
          <TitleText>Context Demo</TitleText>
          <View style={[sharedStyles.box, { flex: 1 }]}>
            <SubtitleText>Input</SubtitleText>
            <Form>
              <FormRow>
                <FormColumn style={{ flex: 0.3 }}>
                  <LabelText style={styles.label}>Name:</LabelText>
                </FormColumn>
                <FormColumn>
                  <LctInput value={name} onChangeText={setName} />
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn style={{ flex: 0.3 }}>
                  <LabelText style={styles.label}>Age:</LabelText>
                </FormColumn>
                <FormColumn>
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
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn style={{ flex: 0.3 }}>
                  <LabelText style={styles.label}>Title:</LabelText>
                </FormColumn>
                <FormColumn>
                  <LctInput value={title} onChangeText={setTitle} />
                </FormColumn>
              </FormRow>
              <FormRow>
                <FormColumn style={{ flex: 0.3 }}>
                  <LabelText style={styles.label}>Years:</LabelText>
                </FormColumn>
                <FormColumn>
                  <LabelText>{years}</LabelText>
                  <BigButton
                    style={styles.plusMinus}
                    title="-"
                    onPress={() => setYears((years) => Math.max(0, years - 1))}
                  />
                  <BigButton
                    style={styles.plusMinus}
                    title="+"
                    onPress={() =>
                      setYears((years) => Math.min(age, years + 1))
                    }
                  />
                </FormColumn>
              </FormRow>
            </Form>
          </View>
          <View style={[sharedStyles.box, { flex: 1 }]}>
            <SubtitleText>Output</SubtitleText>
            {/* Display the values of both contexts in the EmployeeView */}
            <EmployeeView />
          </View>
          <StatusBar style="auto" />
        </View>
      </JobContextProvider>
    </NameAgeContext.Provider>
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
  label: {
    fontWeight: "bold",
  },
});
