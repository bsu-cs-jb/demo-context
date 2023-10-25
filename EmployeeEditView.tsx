import { StyleSheet } from "react-native";
import {
  BigButton,
  Form,
  FormColumn,
  FormRow,
  LabelText,
  LctInput,
} from "./Shared";
import { useContext, useState } from "react";
import { NameAgeContext } from "./NameAgeContext";
import { genid } from "./utils";

interface EmployeeEditViewProps {
  // name: string;
  // onChangeName: (name: string) => void;
  // age: number;
  // onChangeAge: (age: number) => void;
}
export function EmployeeEditView() {
  // const { name, setName, age, setAge } = useContext(NameAgeContext);
  const { addPerson } = useContext(NameAgeContext);
  const [name, setName] = useState("Chuckie");
  const [age, setAge] = useState(30);

  return (
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
            onPress={() => setAge(age - 5)}
          />
          <BigButton
            style={styles.plusMinus}
            title="+"
            onPress={() => setAge(age + 5)}
          />
        </FormColumn>
      </FormRow>
      <BigButton
        title="Add"
        onPress={() =>
          addPerson({
            id: genid(),
            name,
            age,
          })
        }
      />
    </Form>
  );
}

export const styles = StyleSheet.create({
  plusMinus: {
    paddingHorizontal: 15,
  },
  label: {
    fontWeight: "bold",
  },
});
