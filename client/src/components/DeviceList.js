import React, { useState, useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import "./AppRouter.css";
import ScrollTop from "../components/ScrollTop";
// import Slider from "./Slider";
const DeviceList = observer(() => {
  const { device } = useContext(Context);

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
    <ScrollTop>
      <div className="form">
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
      </div>
      <Row className="d-flex bd-highlight">
        {
          filteredItems.map((device) => (
            <DeviceItem key={device.id} device={device} />
          ))
          //.reverse()
        }
      </Row>
    </ScrollTop>
  );
});

export default DeviceList;
