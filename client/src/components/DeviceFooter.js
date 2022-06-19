import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import './AppRouter.css'

const DeviceFooter = observer(() => {
    const {device} = useContext(Context)

    return (
        <Row className="d-flex bd-highlight" >

    {device.devices.filter(device => device.id < 5).map(
                    device =>


         
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceFooter;
