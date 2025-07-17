import "@/app/styles/App.css";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  addField,
  deleteField,
  toggleRequired,
} from "@/entities/field/model/fieldSlice";
import { Button } from "antd";
import { FormEditor } from "@/widgets/FieldEditor/ui/FormEditor";
import { FormPreview } from "@/widgets/FormPreview/ui/FormPreview";

function App() {
  const dispatch = useAppDispatch();
  const fields = useAppSelector((state) => state.field.fields);

  const handleAddField = () => {
    dispatch(
      addField({
        id: Date.now().toString(),
        type: "input",
        label: "Новое поле",
        required: false,
      })
    );
  };

  return (
    <div className="App">
      <div style={{ display: "flex", height: "100vh" }}>
        <FormEditor />
        <FormPreview />
      </div>
    </div>
  );
}

export default App;
