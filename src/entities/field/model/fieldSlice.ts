import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FieldType = "input" | "checkbox";

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
}

interface FieldState {
  fields: Field[];
}

const initialState: FieldState = {
  fields: [],
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    addField(state, action: PayloadAction<Field>) {
      state.fields.push(action.payload);
    },
    deleteField(state, action: PayloadAction<string>) {
      state.fields = state.fields.filter((f) => {
        return f.id !== action.payload;
      });
    },
    toggleRequired(state, action: PayloadAction<string>) {
      const field = state.fields.find((f) => f.id === action.payload);
      if (field) {
        field.required = !field.required;
      }
    },
  },
});

export const { addField, deleteField, toggleRequired } = fieldSlice.actions;
export const fieldReducer = fieldSlice.reducer;
