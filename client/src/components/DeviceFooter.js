import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import './AppRouter.css'
import {useParams} from 'react-router-dom'

const DeviceFooter = observer(() => {
    const {device} = useContext(Context)
    const {id} = useParams()
    return (
        <Row className="d-flex bd-highlight mb-15" style={{marginBottom: 15}} >

    {device.devices.filter(device => device.id != id ).map(
                    device =>


         
                <DeviceItem key={device.id} device={device}/>
            ).reverse().slice(0,4)
    }
            {/* <div style={{backgroundColor:'#343a40', height:200, width: '100%'}}>d </div> 
            .sort(() => Math.random() - 1)
            */}
        </Row>
        
    );
});

export default DeviceFooter;
