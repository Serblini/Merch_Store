import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Observer, observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import NavBarS from "./components/NavBars"
import './index.css'
import './components/AppRouter.css'
import Slider from './components/Slider'
import DeviceList from './components/DeviceList';


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
  
    // const {device} = useContext(Observer)



    //  ФУНКЦИЯ ПОИСКА
      // const [selectedSort , setSelectedSort] = useState()
    // {device.devices.map(device =>
    // function getSortedDevices(){
    //     if(selectedSort){
    //         return [...device.devices].sort(a , b ) => a[selectedSort].localCompare(b[selectedSort]))
    //     }
    //         return device.devices;
    // }
    // const sortedDevices = getSortedDevices()
    // const [SearchQuery, setSearchQuery] = useState( )
    // const sortDevices = (sort) =>{
    //     setSelectedSort(sort)
    // }

    //  ФУНКЦИЯ ПОИСКА

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        
        <BrowserRouter 
       
        >


        <NavBarS>
            
        </NavBarS>

       
        {/* <MyInput
            value={SearchQuery}
            onChange={ e=> setSearchQuery(e.target.value)}
            placeholder="...поиск"
        />
        
            {device.length ?
            <DeviceList remove={removeDevice} device={sortDevices}   title="Товары по запросу" />
            :
            <h1 style={{textAlign: 'center'}}>
                    Товары не найдены
            </h1>
        } */}
        <Slider />
            {/* <NavBar /> */}
            <AppRouter className='router' />
        </BrowserRouter>
    );
});

export default App;
