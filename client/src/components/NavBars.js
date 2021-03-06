// import {SHOP_ROUTE} from "../utils/consts";
import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Containers from "./Container";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
// import {observer} from "mobx-react-lite";
// import Container from "react-bootstrap/Container";
import { useHistory, useParams } from "react-router-dom";
import { Row, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./NavBar.css";
let val;

const NavBars = observer(() => {
  const { device } = useContext(Context);

  const { user } = useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
  };

  return (
    <Navbar
      className="Navbar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      img
      src={logo}
    >
      <image className="Navbars" bg="light" src={logo}></image>
      <Navbar.Brand className="navbar-logo" href={SHOP_ROUTE}>
        Warframe
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {device.types.map((type) => (
            <NavDropdown
              style={{ cursor: "pointer" }}
              active={type.id === device.selectedType.id}
              // onClick={() => device.setSelectedType(type)}
              key={type.id}
              title={type.name}
              val={type.id}
            >
              {/* <NavDropdown.Item> {type.name}</NavDropdown.Item> */}

              {/* <NavDropdown.Item
                       className="NavBarItems"
                       style={{cursor:'pointer'}}
                      //  key={brand.id}
                       className="p-3"
                       onClick={() => device.setSelectedType(type), ()=> device.setSelectedBrand(brand)}
                      //  border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                      //  href={SHOP_ROUTE}
                   >
                     {type.name}
                   </NavDropdown.Item> */}

              {device.brands
                .filter((brand) => brand.typeid === type.id)
                .map(
                  (brand) => (
                    //  if(typeid===val)
                    //  return
                    <NavDropdown.Item
                      className="NavBarItems"
                      style={{ cursor: "pointer" }}
                      key={brand.id}
                      className="p-3"
                      onClick={() => device.setSelectedBrand(brand)}
                      border={
                        brand.id === device.selectedBrand.id
                          ? "danger"
                          : "light"
                      }
                      //  href={SHOP_ROUTE}
                    >
                      {brand.name}

                      {/* , this.handleClick.bind(this, brand.name) */}
                    </NavDropdown.Item>
                  )
                  // return false
                )}
            </NavDropdown>
          ))}
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}

          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}></NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                ?????????? ????????????
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="ml-2"
              >
                ??????????
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                ??????????????????????
              </Button>
            </Nav>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">

    //      <NavDropdown title="????????????" id="collasible-nav-dropdown"

    //         >
    //            <Row className="d-flex" >
    //         {device.devices.map(device =>
    //           <NavDropdown.Item key={device.id} device={device}/>
    //        )}
    //       </Row>

    //            {/* {type.name} */}
    //         {/* // ????????????" id="collasible-nav-dropdown">
    //         // <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //         // <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //         // <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //         // <NavDropdown.Divider />
    //         // <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
    //       </NavDropdown>
    //     {/* )} */}
    //     </Nav>
    //     <Nav>
    //       <Nav.Link href="#deets">More deets</Nav.Link>
    //       <Nav.Link eventKey={2} href="#memes">
    //         Dank memes
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>

    // <ListGroup>
    //     {device.types.map(type =>
    //         <ListGroup.Item
    //             style={{cursor: 'pointer'}}
    //             active={type.id === device.selectedType.id}
    //             onClick={() => device.setSelectedType(type)}
    //             key={type.id}
    //         >
    //             {type.name}
    //         </ListGroup.Item>
    //     )}
    // </ListGroup>
  );
});

export default NavBars;
