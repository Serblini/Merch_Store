import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink } from "react-router-dom";
import { Button, Container, Card, Row } from "react-bootstrap";
import BasketList from "../components/BasketList";
import { fetchBasket, setBasketDevices } from "../http/basketAPI";

const Basket = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchBasket().then((data) => device.setBasketDevices(data));
  }, []);

  return (
    <Container>
      <BasketList />
      <Card>{}</Card>
    </Container>
  );
});

export default Basket;
