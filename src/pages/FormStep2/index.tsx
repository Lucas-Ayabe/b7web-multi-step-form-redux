import { useHistory, Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, usePage } from "../../hooks";
import { professionalInfoUpdated } from "../../reducers/form-reducer";
import { Theme } from "../../components/Theme";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  usePage(2);

  const handleNextStep = () => {
    if (state.name !== "") {
      history.push("/step3");
    } else {
      alert("Preencha os dados.");
    }
  };

  const setLevel = (level: number) => {
    dispatch(professionalInfoUpdated(level as 0 | 1));
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>
          Escolha a opção que melhor condiz com seu estado atual,
          profissionalmente.
        </p>

        <hr />

        <SelectOption
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Sou programador"
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <Link to="/" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
