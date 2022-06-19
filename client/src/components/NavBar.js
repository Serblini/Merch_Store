import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, ButtonGroup, ButtonToolbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

// const divStyle = {
//     color: white,
//   //   backgroundImage: 'url(' + imgUrl + ')',
//   //   .dropdown:hover .dropdown-menu { display: block; }
// // renderMenuOnMount={true}
// .dropdown {
//     position: relative;
//     display: inline-block;
//   }
// };
// function NavBars(){
// const Click

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const {device} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink 
                
                style={{color:'white'}} 
                to={SHOP_ROUTE}>Warframe</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {/* <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button> */}
{/*                       Кнопки                           */}



                     {device.types.map(type =>
                        <ButtonGroup
                            variant={"outline-light"}
                            
                            // style={{cursor: 'pointer'}}
                            style={{ }}
                            active={type.id === device.selectedType.id}
                            onClick={() => device.setSelectedType(type)}
                            
                            key={type.id}
                            className="ml-2"
                        >
                            {type.name}
                        </ButtonGroup>
                    )}
                    

{/*                                                          */}

                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});
// }
export default NavBar;
