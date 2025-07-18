import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Field {
  id: string;
  label: string;
  placeholder: string;
  value: string;
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
    updateValue(state, action: PayloadAction<{ id: string; value: string }>) {
      const field = state.fields.find((f) => f.id === action.payload.id);
      if (field) {
        field.value = action.payload.value;
      }
    },
    clearFields(state) {
      state.fields = [];
    },
  },
});

export const {
  addField,
  deleteField,
  toggleRequired,
  updateValue,
  clearFields,
} = fieldSlice.actions;
export const fieldReducer = fieldSlice.reducer;
