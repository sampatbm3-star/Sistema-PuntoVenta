import styled from "styled-components";
import { Title, InputText2, Btnsave, Linea, Footer, useAuthStore } from "../../index"; // Importamos ambos
import { v } from "../../styles/variables";



export function LoginTemplate() {
  const { loginGoogle } = useAuthStore();
  
  return (
    <Container>
      <section className="ContentCard">
        <div className="card">
          <div className="tituloContainer">
            <img src={v.logo} className="logoTitle" alt="logo" />
            <Title>Ingresar</Title>
          </div>
          <form>
            <InputText2>
              <input 
                className="form__field" 
                type="text" 
                placeholder="email"
              />
            </InputText2>
            <InputText2>
              <input 
                className="form__field" 
                type="text" 
                placeholder="password"
              />
            </InputText2>
            <div className="btnContainer">
              <Btnsave titulo='INGRESAR' bgcolor='#11A6FF' width='100%'/>
            </div>
          </form>
          <Linea>
            <span>0</span>
          </Linea>
          <div className="googleBtnContainer">
            <Btnsave color="0,0,0" funcion={loginGoogle} titulo="Google" bgcolor="#fff" icono={<v.iconogoogle/>}/>
          </div>
        </div>
      </section>
      <Footer/>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bgtotal};
  width: 100%;
  flex-direction: column;
  padding: 20px 0;

  .ContentCard {
    flex: 1;
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .card {
      background-color: ${(props) => props.theme.bg};
      padding: 40px 45px;
      border-radius: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);

      .tituloContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-bottom: 8px;

        .logoTitle {
          width: 38px;
          height: 38px;
          object-fit: contain;
          /* animación flotante igual que en el sidebar */
          animation: flotar 1.7s ease-in-out infinite alternate;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 14px;
        .form__field:focus{
          outline: none;
          border-color: #11A6FF;
        }
        .btnContainer {
          display: flex;
          justify-content: center;
          margin-top: 8px;
          width: 100%;
        }
      }

      .googleBtnContainer {
        display: flex;
        justify-content: center;
        width: 100%;

        /* Hacemos que el botón de Google ocupe un ancho fijo y centrado */
        button {
          width: 60%;
          justify-content: center;
        }
      }
    }
  }
`;
