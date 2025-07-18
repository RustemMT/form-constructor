import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { clearFields } from "@/entities/field/model/fieldSlice";
import { Input, Form, Button } from "antd";
import styles from "./FormPreview.module.css"; // 👈 импорт стилей

export const FormPreview = () => {
  const fields = useAppSelector((state) => state.field.fields);
  const dispatch = useAppDispatch();

  const handleFinish = (values: Record<string, string>) => {
    const readableValues = fields.reduce((acc, field) => {
      acc[field.label] = values[field.id];
      return acc;
    }, {} as Record<string, string>);

    console.log("Форма отправлена:", readableValues);
    dispatch(clearFields());
  };

  let formFields = fields.map((field) => (
    <Form.Item
      key={field.id}
      name={field.id}
      label={field.label}
      rules={
        field.required
          ? [
              {
                required: true,
                message: "Пожалуйста, заполните поле",
              },
            ]
          : []
      }
    >
      <Input placeholder={field.value} />
    </Form.Item>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Форма регестрации участников</h3>
        {fields.length ? (
          <Form layout="vertical" onFinish={handleFinish}>
            {formFields}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Отправить
              </Button>
            </Form.Item>
          </Form>
        ) : (
          <div>Поля формы пока не добавлены</div>
        )}
      </div>
    </div>
  );
};
