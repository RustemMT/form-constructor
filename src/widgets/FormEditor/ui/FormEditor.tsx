import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addField } from "@/entities/field/model/fieldSlice";
import { Button, Form, Space } from "antd";
import styles from "./FormEditor.module.css";
import { FieldCard } from "./FieldCard";
import { v4 as uuid } from "uuid";

export const FormEditor = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.field.fields);

  const handleAdd = () => {
    dispatch(
      addField({
        id: uuid(),
        value: "",
        required: false,
      })
    );
  };

  return (
    <div className={styles.container}>
      <Form layout="vertical">
        <Space direction="vertical" className={styles.fullWidth}>
          <Button onClick={handleAdd} className={styles.addButton}>
            Добавить поле
          </Button>

          {fields.map((field) => (
            <FieldCard key={field.id} field={field} />
          ))}
        </Space>
      </Form>
    </div>
  );
};
