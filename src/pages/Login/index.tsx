import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import jwtDecode from "jwt-decode";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import BackgroundLogin from "../../assets/img/background-login.jpg";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 300px;
  text-align: center;
  position: relative;
`;

const AnimatedForm = styled.div<{ visible: boolean }>`
  position: absolute;
  top: -150px;
  left: 0;
  width: 100%;
  transition: opacity 0.5s ease, transform 0.5s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) =>
    visible ? "translateX(0)" : "translateX(100px)"};
  z-index: ${({ visible }) => (visible ? 1 : 0)};
`;

const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #4f46e5;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background-color: #4338ca;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 16px 0;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ccc;
  }

  &::before {
    margin-right: .25em;
  }

  &::after {
    margin-left: .25em;
  }

  span {
    color: #666;
    font-size: 14px;
  }
`;

const GoogleButtonContainer = styled.div`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;  
  text-align: center;
  cursor: pointer;
  margin-bottom: 12px;
  background-color: white;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: transparent;
  }

  &:hover {
    border-color: #888;
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RememberMe = styled.label`
  display: flex;
  align-items: center;
  margin-right: 16px;

  input {
    margin-right: 8px;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  
  background-image: linear-gradient(
      rgba(0, 0, 5, 0.5), 
      rgba(0, 0, 7, 0.5)
    ),
    url(${BackgroundLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export interface userI {
  name: string | null;
  iat?: number;
  iss?: string;
  picture?: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState<userI>({ name: null });
  const [showRegister, setShowRegister] = useState(false);

  function handleLoginSuccess(userObject: any) {
    setUser(userObject as userI);
    localStorage.setItem("token", JSON.stringify(userObject));
  }

  function handleCallbackResponse(response: any) {
    console.log("Encoded JWT ID token:" + response.credential);
    const userObject = jwtDecode(response.credential);
    console.log(userObject);

    setUser(userObject as userI);
    localStorage.setItem("token", JSON.stringify(userObject));
  }

  function handleSignout() {
    setUser({ name: null });
    localStorage.removeItem("token");
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "488131369581-oms526oiaqc55adh4bd8rusd3i8e8qoo.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv")!,
      {
        theme: "outline",
        size: "large",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
        width: "100%",
        type: "standard",
      }
    );

    google.accounts.id.prompt();
  }, []);

  return (
    <OuterContainer>
      <NavBar />
      <ContentContainer>
        <LeftContainer>
          <FormContainer>
            {user.name ? (
              <Button onClick={handleSignout}>Sign out</Button>
            ) : (
              <>
                <AnimatedForm visible={!showRegister}>
                  <Title>Bem vindo à Eng Comp!</Title>
                  <Input type="email" placeholder="Seu Email" />
                  <Input type="password" placeholder="Sua senha" />
                  <RememberMeContainer>
                    <RememberMe>
                      <input type="checkbox" />
                      <span>Lembre-se de mim</span>
                    </RememberMe>
                    <a href="/" style={{ fontSize: '14px', color: '#0066c0' }}>Esqueceu sua senha?</a>
                  </RememberMeContainer>

                  <Divider><span>Ou, use seu Email USP</span></Divider>

                  <GoogleButtonContainer>
                    <div id="signInDiv"></div>
                  </GoogleButtonContainer>

                  <p>
                    Não tem uma conta?{' '}
                    <a href="#" onClick={() => setShowRegister(true)}>Registre-se aqui!</a>
                  </p>
                </AnimatedForm>

                <AnimatedForm visible={showRegister}>
                  <Title>Registre-se no Eng Comp!</Title>
                  <Input type="text" placeholder="Nome completo" />
                  <Input type="email" placeholder="Seu Email" />
                  <Input type="password" placeholder="Sua senha" />
                  <Button>Registrar</Button>
                  <p>
                    Já tem uma conta?{' '}
                    <a href="#" onClick={() => setShowRegister(false)}>Faça login aqui!</a>
                  </p>
                </AnimatedForm>
              </>
            )}
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          <RightBackground />
        </RightContainer>
      </ContentContainer>
      <Footer />
    </OuterContainer>
  );
};

export default Login;
