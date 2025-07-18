import { FormEditor } from "@/widgets/FormEditor/ui/FormEditor";
import { FormPreview } from "@/widgets/FormPreview/ui/FormPreview";

export const ConstructorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <FormEditor />
      <FormPreview />
    </div>
  );
};
