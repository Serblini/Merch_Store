import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { Observer, observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";
import Slider from "./components/Slider";
import NavBarS from "./components/NavBars";
import "./index.css";
import "./components/AppRouter.css";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  // const {device} = useContext(Observer)

  useEffect(() => {
    check()
      .then((data) => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBarS></NavBarS>

      {/* {
        value && isOpen
          ? filteredItems.map((device) => {
              return (
                <li className="autocomplete_item" onClick={itemClickHandler}>
                  {device.name}
                </li>
              );
            })
          : null
        //.reverse()
      } */}

      {/* <NavBar /> */}
      <Slider />
      <AppRouter className="router" />
    </BrowserRouter>
  );
});

export default App;
