import React from 'react';
import {useHistory, useParams} from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import slide1 from "../assets/3.jpg";
import slide2 from "../assets/4.jpg";
import slide3 from "../assets/2.jpg";




export default function Slider () {
    const history = useHistory()

    return (
        <Carousel >
            <Carousel.Item to="device/38">
                <img
                    className="d-block w-100"
                    src={slide1}
                    onClick={() => history.push('device/38')}
                    style={{'height':'400px'}}
                />
                
                <Carousel.Caption style={{'text-align':'left' , marginLeft:-50}}>
      <h1>Постеры Новой Войны</h1>
      <h2 style={{'-webkit-text-stroke': '0.8px black', marginBottom:0}}>Предзакажите уже сейчас!</h2>
    </Carousel.Caption>
            </Carousel.Item>
{/*                                  */}
        <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    // alt={}
                    style={{'height':'400px', 'font-family':'ITC Avant Garde Gothic,sans-serif', 
                    'letter-spacing':'.025em'}}
                  
            
        //         line-height: 1.6;
        // font-size: 17px;
        // -webkit-text-size-adjust: 100%;
        // t ext-rendering: optimizeSpeed;
                />
                
                
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    style={{'height':'400px'}}
                />
                {/* <Carousel.Caption style={{'text-shadow': 'white 6px', 'text-allign':'left' }}>
                <h1 style={{'font-weight':'700', 'text-shadow': 'white 6px', 'text-allign':'left'}}>Злодеи</h1>                   
                
                <h3>Коллекция 2.0</h3>
                    
                

                </Carousel.Caption> */}
                
            </Carousel.Item>
        </Carousel>
    )
}