import { useHistory } from "react-router-dom";
import * as C from "./styles";
import { useForm } from "../../hooks";
import {
  currentStepUpdated,
  pessoalInfoUpdated,
} from "../../reducers/form-reducer";
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch(currentStepUpdated(1));
  }, [dispatch]);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step2");
    } else {
      alert("Preencha os dados.");
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(pessoalInfoUpdated(event.target.value));
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr />

        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
