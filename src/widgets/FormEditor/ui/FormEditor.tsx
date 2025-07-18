import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addField,
  deleteField,
  toggleRequired,
  updateValue,
} from "@/entities/field/model/fieldSlice";
import { Button, Card, Checkbox, Form, Input, Space } from "antd";
import styles from "./FormEditor.module.css";

export const FormEditor = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.field.fields);

  const handleAdd = () => {
    dispatch(
      addField({
        id: Date.now().toString(),
        value: "",
        label: "",
        required: false,
        placeholder: "",
      })
    );
  };

  const renderedFields = fields.map((field) => (
    <Card
      key={field.id}
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
  ));

  return (
    <div className={styles.container}>
      <Form layout="vertical">
        <Space direction="vertical" className={styles.fullWidth}>
          <Button onClick={handleAdd} className={styles.addButton}>
            Добавить поле
          </Button>

          {renderedFields}
        </Space>
      </Form>
    </div>
  );
};
