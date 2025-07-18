import { Card, Checkbox, Form, Input, Button } from "antd";
import { Field } from "@/entities/field/model/fieldSlice";
import styles from "./FormEditor.module.css";
import { useAppDispatch } from "@/app/hooks";
import {
  deleteField,
  toggleRequired,
  updateValue,
} from "@/entities/field/model/fieldSlice";

interface FieldCardProps {
  field: Field;
}

export const FieldCard = ({ field }: FieldCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      size="default"
      title={field.value || "Новое поле"}
      className={styles.card}
    >
      <Form.Item label="Название поля" className={styles.formItem}>
        <Input
          placeholder="Название поля"
          value={field.value}
          className={styles.input}
          onChange={(e) =>
            dispatch(updateValue({ id: field.id, value: e.target.value }))
          }
        />
      </Form.Item>

      <Button
        danger
        onClick={() => dispatch(deleteField(field.id))}
        className={styles.deleteButton}
      >
        Удалить
      </Button>

      <Form.Item>
        <Checkbox
          checked={field.required}
          onChange={() => dispatch(toggleRequired(field.id))}
          className={styles.checkbox}
        >
          Сделать поле обязательным
        </Checkbox>
      </Form.Item>
    </Card>
  );
};
