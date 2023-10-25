import { StyleSheet } from "react-native";
import {
  BigButton,
  Form,
  FormColumn,
  FormRow,
  LabelText,
  LctInput,
} from "./Shared";

interface EmployeeEditViewProps {
  name: string;
  onChangeName: (name: string) => void;
  age: number;
  onChangeAge: (age: number) => void;
}
export function EmployeeEditView({
  name,
  onChangeName,
  age,
  onChangeAge,
}: EmployeeEditViewProps) {
  return (
    <Form>
      <FormRow>
        <FormColumn style={{ flex: 0.3 }}>
          <LabelText style={styles.label}>Name:</LabelText>
        </FormColumn>
        <FormColumn>
          <LctInput value={name} onChangeText={onChangeName} />
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
            onPress={() => onChangeAge(age - 5)}
          />
          <BigButton
            style={styles.plusMinus}
            title="+"
            onPress={() => onChangeAge(age + 5)}
          />
        </FormColumn>
      </FormRow>
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
