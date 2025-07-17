import React from "react";
import { useAppSelector } from "@/app/hooks";
import { Input, Checkbox, Form } from "antd";

export const FormPreview = () => {
  const fields = useAppSelector((state) => state.field.fields);

  return (
    <div style={{ width: "50%", padding: 16, background: "#fafafa" }}>
      <h3>Предпросмотр формы</h3>
      <Form layout="vertical">
        {fields.map((field) => (
          <Form.Item
            key={field.id}
            label={field.label}
            required={field.required}
          >
            {field.type === "input" ? (
              <Input />
            ) : (
              <Checkbox>{field.label}</Checkbox>
            )}
          </Form.Item>
        ))}
      </Form>
    </div>
  );
};
