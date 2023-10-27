import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BigButton, FlexFill, LabelText } from "./Shared";
import { useContext } from "react";
import { NameAge, NameAgeContext } from "./NameAgeContext";
import sharedStyles from "./styles";

export function EmployeeView() {
  // use the NameAgeContext directly
  const { people, deletePerson } = useContext(NameAgeContext);

  return (
    <ScrollView>
      {people.map((person) => (
        <PersonView key={person.id} person={person} onDelete={deletePerson} />
      ))}
    </ScrollView>
  );
}

interface PersonViewProps {
  person: NameAge;
  onDelete: (person: NameAge) => void;
}
export function PersonView({ person, onDelete }: PersonViewProps) {
  return (
    <View style={sharedStyles.horzContainer}>
      <View>
        <Text>
          <LabelText style={styles.label}>Name: </LabelText>
          <LabelText>{person.name}</LabelText>
        </Text>
        <Text>
          <LabelText style={styles.label}>Age: </LabelText>
          <LabelText>{person.age}</LabelText>
        </Text>
      </View>
      <FlexFill />
      <BigButton title="Delete" onPress={() => onDelete(person)} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "bold",
  },
});
