import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import EmailInput from "../components/Input/EmailInput";

import PassInput from "../components/Input/PassInput.js";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer((props) => {
  const { user } = useContext(Context);
  const location = useLocation();
  const history = useHistory();
  //   const navigate = useNavigate();

  // const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const click = async () => {
    try {
      if (!user.isValidEmail) {
        alert(`Введите корректный email!`);
        return;
      } else if (!user.isValidPassword) {
        alert(`Введите корректный password!`);
        return;
      } else {
        if (isLogin) {
          await login(user.email, user.password);
        } else {
          await registration(user.email, user.password);
        }
      }
      // let data;
      // if (isLogin) {
      //     data = await login(email, password);
      // } else {
      //     data = await registration(email, password);
      // }
      user.setUser(user);
      user.setIsAuth(true);
      props.onHide(false);
      //   navigate(-1);
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.message || e.response.data.message);
    }
  };

  return (
    <Container
      {...props}
      // className="auth__modal"
      aria-labelledby="contained-modal-title-vcenter"
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <EmailInput />
          <PassInput />
          {/* <Form.Control
              className="mt-3"
              placeholder="Введите ваш email..."
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш пароль..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            /> */}
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{" "}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            )}
            <Button variant={"outline-dark"} onClick={click}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
