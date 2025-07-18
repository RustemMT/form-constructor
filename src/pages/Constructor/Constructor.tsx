import { FormEditor } from "@/widgets/FormEditor/ui/FormEditor";
import { FormPreview } from "@/widgets/FormPreview/ui/FormPreview";
import styles from "./Constructor.module.css";

export const ConstructorPage = () => {
  return (
    <div className={styles.wrapper}>
      <FormEditor />
      <FormPreview />
    </div>
  );
};
