import React, { useState, useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row, ListGroup } from "react-bootstrap";
import BasketItem from "./BasketItem";
import "./AppRouter.css";
import ScrollTop from "../components/ScrollTop";

const BasketList = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup className="d-flex bd-highlight flex-column">
      {device.basketDevices.map((item) => (
        <BasketItem key={device.id} device={item} />
      ))}
    </ListGroup>
  );
});

export default BasketList;
