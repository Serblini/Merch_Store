import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (



        
        <Row className="d-flex">
             {/* {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )} */}
            {device.brands.map(
                brand =>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    bg='dark'
                    text='light'
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Row>
    );
});

export default BrandBar;
