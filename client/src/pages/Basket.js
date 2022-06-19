import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
// import {observer} from "mobx-react-lite";
// import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'

const Basket = () => {
    return (
        <div>
            basket
        </div>
    );
};

export default Basket;
