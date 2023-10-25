import { StyleSheet, Text, View } from "react-native";
import { LabelText } from "./Shared";
import { useContext } from "react";
import { NameAgeContext } from "./NameAgeContext";
import { useJobContext } from "./JobContext";

export function EmployeeView() {
  // use the NameAgeContext directly
  const { name, age } = useContext(NameAgeContext);

  // use a helper hook method for the JobContext
  const { title, years } = useJobContext();

  return (
    <View>
      <Text>
        <LabelText style={styles.label}>Name: </LabelText>
        <LabelText>{name}</LabelText>
      </Text>
      <Text>
        <LabelText style={styles.label}>Age: </LabelText>
        <LabelText>{age}</LabelText>
      </Text>
      <Text>
        <LabelText style={styles.label}>Title: </LabelText>
        <LabelText>{title}</LabelText>
      </Text>
      <Text>
        <LabelText style={styles.label}>Years of Experience: </LabelText>
        <LabelText>{years}</LabelText>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
