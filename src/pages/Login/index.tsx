import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import jwtDecode from "jwt-decode";
import { Container, LoginCard, ErrorMessage } from "./styles";


export interface userI {
  name: string | null;
  iat?: number;
  iss?: string;
  picture?: string;
  email?: string;
}

const Login: React.FC = () => {
  const location = useLocation();
  const [user, setUser] = useState<userI>(() => {
    // Recupere as informações do usuário do localStorage se estiver autenticado
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : { name: null };
  });
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") !== null
  );
  const [redirectTo, setRedirectTo] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const isUserObject = (object: any): object is userI => {
      return "email" in object;
    };

    const handleCallbackResponse = (response: any) => {
      console.log("Encoded JWT ID token:" + response.credential);
      const userObject = jwtDecode(response.credential);
      console.log(userObject);

      if (isUserObject(userObject)) {
        setUser(userObject);

        if (userObject.email?.endsWith("@usp.br")) {
          // Armazene as informações do usuário no localStorage
          localStorage.setItem("user", JSON.stringify(userObject));
          localStorage.setItem("token", "userObject");
          setIsAuthenticated(true);
          if (userObject.picture) {
            localStorage.setItem("userPicture", "userObject.picture");
          }

          if (redirectTo) {
            window.location.href = redirectTo;
          } else {
            window.location.href = "/";
          }
        } else {
          setErrorMessage("Tente novamente com um e-mail USP.");
        }
      } else {
        console.error("Usuário não tem um e-mail.");
      }
    };

    if (!isAuthenticated && typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "488131369581-oms526oiaqc55adh4bd8rusd3i8e8qoo.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      const docGetId = document.getElementById("signInDiv")!;
      google.accounts.id.renderButton(docGetId, {
        theme: "outline",
        size: "medium",
        type: "standard",
      });

      google.accounts.id.prompt();
    }
  }, [isAuthenticated, redirectTo]);

  const handleSignout = () => {
    setUser({ name: null });
    // Limpe as informações do usuário do localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/Login";
  };

  return (
    <div>
      <Navbar />
      <Container>
        <LoginCard>
          {isAuthenticated ? (
            <div>
              {user.picture && <img src={user.picture} alt="User" />}
              {user.name && <h2>{user.name}</h2>}
              {user.email && <p>{user.email}</p>}
              <button onClick={handleSignout}>Sign out</button>
            </div>
          ) : (
            <>
              <h2>Login</h2>
              {!isAuthenticated ? <div id="signInDiv"></div> : null}
            </>
          )}

          {/* Exibição da mensagem de erro */}
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </LoginCard>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;