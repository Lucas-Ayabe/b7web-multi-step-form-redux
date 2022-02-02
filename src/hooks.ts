import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { currentStepUpdated } from "./reducers/form-reducer";
import { useHistory } from "react-router-dom";

const identity = <T>(x: T) => x;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useForm = (selector = identity) => ({
  state: useAppSelector(selector),
  dispatch: useAppDispatch(),
});

export const usePage = (page: number) => {
  const history = useHistory();
  const { dispatch, state } = useForm();

  useEffect(() => {
    if (state.name === "") history.push("/");
    else dispatch(currentStepUpdated(page));
  }, [dispatch, history, state.name, page]);
};
