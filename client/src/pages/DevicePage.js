import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import DeviceFooter from "../components/DeviceFooter";
// import ScrollTop from '../components/ScrollTop';


const DevicePage = () => {
    
    const [device, setDevice] = useState({info: [] }
        
        )
        // let infos = new Array ()
        // const addToCart = ()=>{
        //     this.device
        // }
        const {id} = useParams()
        useEffect(() => {
            fetchOneDevice(id).then(data => 
                {   setDevice(data);
                    // infos = data;
                    // console.log(JSON.stringify(infos));  
                }
            )
        }, [])   
    
    
    // const [cartDevices, setCartDevices] = useState([]);
    // const addToCart= ()=>{
    //     setDevice([
    //         ...
    //         "test"
    //     ])
    //     localStorage.setItem('device', JSON.stringify({device}));
    // }
    // useEffect(()=>{
    //     localStorage.setItem("device")
    // }
    // )

    return (
        
        <Container className="mt-3">
            <Row> 
            <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, 
                            width:80, height: 80, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>

                
                <Col md={4}>
                    <Image width={300} height={300} 
                    src={process.env.REACT_APP_API_URL + device.img}/>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, 
                            height: 115, 
                            fontSize: 32, 
                            border: '5px solid lightgray'}}
                    >
                        
                        <h3> {device.price} руб.</h3>
                        <Button variant={"outline-dark"}
                        
                        >Добавить в корзину</Button>
                    </Card>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        
                        <Row className="d-flex flex-column m-3">
                <h1>О товаре</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={
                        {
                            background: index % 2 === 0 ? 
                            'light' : 'transparent', padding: 10, 
                            'font-size': '24px', width: '205%' }}>
                        {/* {info.title}: */}
                         {info.description}
                    </Row>
                )}
            </Row>    
                        {/* </div> */}
                        
                    </Row>
                </Col>
                <Col md={4}>
                    
                </Col>
            </Row>
            <Card className="text-center" style={{ width: "100%", 'margin-top': '20%;' }}>
            <Card.Header  style={{ fontSize: 50}} >
                Вас так же могу заинтересовать следующие товары
                </Card.Header>
            </Card>
            <Col  sm="12"><DeviceFooter /> </Col>  
                {/* {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
                */}
                
            
        </Container>
       
    );
};

export default DevicePage;
