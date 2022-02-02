import { Link } from "react-router-dom";
import * as C from "./styles";
import { useForm, usePage } from "../../hooks";
import { contactInfoUpdated } from "../../reducers/form-reducer";
import { Theme } from "../../components/Theme";
import { withChangeValue } from "../../utils";

export const FormStep3 = () => {
  const { state, dispatch } = useForm();

  usePage(3);

  const handleNextStep = () => {
    if (![state.email, state.github].includes("")) {
      console.log(state);
    } else {
      alert("Preencha os dados");
    }
  };

  const handleEmailChange = withChangeValue((email) => {
    dispatch(contactInfoUpdated({ email }));
  });

  const handleGithubChange = withChangeValue((github) => {
    dispatch(contactInfoUpdated({ github }));
  });

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr />

        <label>
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>

        <label>
          Qual seu GitHub?
          <input
            type="url"
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
