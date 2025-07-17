import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  addField,
  deleteField,
  toggleRequired,
} from "@/entities/field/model/fieldSlice";
import { Button, Card, Checkbox, Space, Input } from "antd";

export const FormEditor = () => {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.field.fields);

  const handleAdd = (type: "input" | "checkbox") => {
    dispatch(
      addField({
        id: Date.now().toString(),
        type,
        label: type === "input" ? "Текстовое поле" : "Чекбокс",
        required: false,
      })
    );
  };

  return (
    <div style={{ width: "50%", padding: 16 }}>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button onClick={() => handleAdd("input")}>
          Добавить текстовое поле
        </Button>
        <Button onClick={() => handleAdd("checkbox")}>Добавить чекбокс</Button>

        {fields.map((field) => (
          <Card key={field.id} size="small" title={field.label}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input
                placeholder="Название поля"
                value={field.label}
                onChange={() => {}}
                disabled
              />
              <Checkbox
                checked={field.required}
                onChange={() => dispatch(toggleRequired(field.id))}
              >
                Обязательное
              </Checkbox>
              <Button danger onClick={() => dispatch(deleteField(field.id))}>
                Удалить
              </Button>
            </Space>
          </Card>
        ))}
      </Space>
    </div>
  );
};
