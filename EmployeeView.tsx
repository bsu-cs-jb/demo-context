import { StyleSheet, Text, View } from "react-native";
import { LabelText } from "./Shared";
import { useContext } from "react";
import { NameAgeContext } from "./NameAgeContext";

export function EmployeeView() {
  // use the NameAgeContext directly
  const { name, age } = useContext(NameAgeContext);

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
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
