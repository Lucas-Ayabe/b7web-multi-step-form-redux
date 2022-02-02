import { createSlice } from "@reduxjs/toolkit";

type Payload<T> = { payload: T };
export type State = {
  currentStep: number;
  name: string;
  level: 0 | 1;
  email: string;
  github: string;
};

const initialState: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    currentStepUpdated(state, action: Payload<number>) {
      state.currentStep = action.payload;
    },
    pessoalInfoUpdated(state, action: Payload<string>) {
      state.name = action.payload;
    },
    professionalInfoUpdated(state, action: Payload<0 | 1>) {
      state.level = action.payload;
    },
    contactInfoUpdated(
      state,
      action: Payload<Partial<Pick<State, "email" | "github">>>
    ) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  contactInfoUpdated,
  currentStepUpdated,
  pessoalInfoUpdated,
  professionalInfoUpdated,
} = formSlice.actions;

export default formSlice.reducer;
