import React, {useEffect, useState} from 'react';
import {Card, Col, Button} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import './AppRouter.css'





const DeviceItem = ({device}) => {
    const history = useHistory()
    const [cartDevices, setCartDevices] = useState([]);   
    // const addToCart= 
  
      

    // useEffect(() => {
    //     if(!items.length){
    //       const jsonItems = localStorage.getItem("cart");
    //       const localItems = JSON.parse(jsonItems);
    //       setItems(jsonItems)
    //     }
    //   }, [items]);
    // }
    // useEffect(()=>{

    //     console.log(cartDevices)
    // },[])

    
    // const [cartDevices, setCartDevices] = useState([]);
    // const addToCart= ()=>{
    //         setCartDevices([
    //             ...cartDevices,
    //             {device}
    //         ]
    //         )
    //         localStorage.setItem('device', JSON.stringify(cartDevices));
    // }


    return (
        

        <Col md={3} className={"mt-3"} >
            <Card 
            className="router" 
            style={{width: 150, cursor: 'pointer'}} border={"light"}
            onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image width={274} height={274} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">

                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div className="" style={{width: 274, 'font-size': '20px'}} >{device.name}</div>
                <div 
                style={{'font-size': '20px',
                 'color':'#145472', 'fontWeight':'bolder'}} >
                      {device.price}₽ 
				</div>
                
            </Card>
            <Button variant="outline-dark" 
                size="sm" block
				onClick={
                    // addToCart()
                    ()=>{
                        setCartDevices([
                            ...cartDevices,
                            device.name
                        ])
                        localStorage.setItem('device', JSON.stringify(cartDevices));
                    }
                }
                // as="input" type="submit" value="Submit" 
                >Добавить в корзину</Button>
        </Col>


    );
};

export default DeviceItem;
