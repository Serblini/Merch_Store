import React, { useContext } from "react";
import { Context } from "../index";
import { Popover, Button, Form, Row, Col, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const User = () => {
  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };
  //   const [brandVisible, setBrandVisible] = useState(false);
  //   const [typeVisible, setTypeVisible] = useState(false);
  //   const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <h5 className="auth__title auth__title--fiol">Мои данные</h5>
      <Row className="px-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="font-weight-bold mr-1">Мой Email: </Form.Label>
        {/* <Form.Control className="b-0 bb" type="text" value={user.user.email} readOnly /> */}{" "}
        <p>{user.user.email}</p>
      </Row>
      <Row className="px-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="font-weight-bold mr-1">Мой ник: </Form.Label>
        {/* <Form.Control className="b-0 bb" type="text" value={user.user.nickname} readOnly /> */}{" "}
        <p>{user.user.name}</p>
      </Row>
      <Row className="px-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="font-weight-bold mr-1">Моя роль: </Form.Label>
        {/* <Form.Control className="b-0 bb" type="text" value={user.user.nickname} readOnly /> */}{" "}
        <p>{user.user.role}</p>
      </Row>
    </Container>
  );
};

export default User;
