import { useAppSelector } from "@/app/hooks";
import { Input, Form, Button, Checkbox } from "antd";
import styles from "./FormPreview.module.css";

export const FormPreview = () => {
  const fields = useAppSelector((state) => state.field.fields);

  const handleFinish = (values: Record<string, string>) => {
    const readableValues = fields.reduce((acc, field) => {
      acc[field.value] = values[field.id];
      return acc;
    }, {} as Record<string, string>);

    console.log("Форма отправлена:", readableValues);
  };

  let formFields = fields.map((field) => (
    <Form.Item
      key={field.id}
      name={field.id}
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
      className={styles.formItem}
    >
      <Input placeholder={field.value} className={styles.input} />
    </Form.Item>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h3 className={styles.title}>Форма регистрации участников</h3>
        {fields.length ? (
          <Form layout="vertical" onFinish={handleFinish}>
            {formFields}
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[{ required: true, message: "Подтвердите согласие" }]}
            >
              <Checkbox className={styles.checkbox}>
                Нажимая кнопку «Отправить», я принимаю условия политики
                конфиденциальности
              </Checkbox>
            </Form.Item>
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
          <div className={styles.emptyMessage}>
            Поля формы пока не добавлены
          </div>
        )}
      </div>
    </div>
  );
};
