// import {SHOP_ROUTE} from "../utils/consts";
import React, { useContext, useRef, useState, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import Containers from "./Container";
import logo from "./logo.png";
import { NavLink, Link } from "react-router-dom";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  USER_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from "../utils/consts";
import { Button } from "react-bootstrap";

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

  const formEl = useRef();

  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (formEl && formEl.current) {
      formEl.current.addEventListener("keydown", clearClickEnter);
    }
  }, []);

  const clearClickEnter = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  //    Сортировка
  const filteredItems = device.devices.filter((device) => {
    return device.name.toLowerCase().includes(value.toLowerCase());
  });

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => [setIsOpen(true)];

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
                      // className="p-3"
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
          <Nav className="d-flex align-items-center" style={{ color: "white" }}>
            <Link variant={"outline-light"} to={BASKET_ROUTE}>
              {/* <Image
                    // onClick={}
                    style={{marginLeft:'-5',marginRight:'-5'}}
                    width={30} height='inherit' 
                    // style={{marginRight15}} 
                    src={scrh}
                    // onMouseEnter={style={'src':scrhb} }
                    onMouseOver={e => e.currentTarget.src = scrhb}
                    onMouseOut={e => e.currentTarget.src = scrh} 
                    /> */}
              {/* onClick={() => history.push(LOGIN_ROUTE)}>Авторизация */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                width={30}
                height="inherit"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                {/* <div className="form_s">
                  <form className="search_form">
                    <input
                      type="text"
                      placeholder="Введите что-либо"
                      className="search_input"
                      value={value}
                      onChange={(event) => setValue(event.target.value)}
                      onClick={inputClickHandler}
                      ref={formEl}
                    />
                    <ul className="autocomplete">
                      {
                        value && isOpen
                          ? filteredItems.map((device) => {
                              return (
                                <li
                                  className="autocomplete_item"
                                  onClick={itemClickHandler}
                                >
                                  {device.name}
                                </li>
                              );
                            })
                          : null
                        //.reverse()
                      }
                    </ul>
                  </form>
                </div> */}
              </svg>
            </Link>
          </Nav>
          {user.isAuth ? (
            // user.user.role == "ADMIN" ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(ADMIN_ROUTE)}
              >
                Админ панель
              </Button>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                className="ml-2"
              >
                Выйти
              </Button>
            </Nav>
          ) : (
            // )
            //   : (
            //   user.user.role ==
            //   "USER"(
            //     <Nav className="ml-auto" style={{ color: "white" }}>
            //       <Button
            //         variant={"outline-light"}
            //         onClick={() => history.push(USER_ROUTE)}
            //       >
            //         Кабинет
            //       </Button>
            //       <Button
            //         variant={"outline-light"}
            //         onClick={() => logOut()}
            //         className="ml-2"
            //       >
            //         Выйти
            //       </Button>
            //     </Nav>
            //   )
            // )
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => history.push(LOGIN_ROUTE)}
              >
                Авторизация
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

    //      <NavDropdown title="Одежда" id="collasible-nav-dropdown"

    //         >
    //            <Row className="d-flex" >
    //         {device.devices.map(device =>
    //           <NavDropdown.Item key={device.id} device={device}/>
    //        )}
    //       </Row>

    //            {/* {type.name} */}
    //         {/* // Одежда" id="collasible-nav-dropdown">
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
