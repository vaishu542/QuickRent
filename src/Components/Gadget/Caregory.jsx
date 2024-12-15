import React from 'react';
import Crad from './Crad';
import Products from './Products';
import { useNavigate } from 'react-router-dom';

const Caregory = () => {
    const navigate = useNavigate();

    const handleNavigate = (link) => {
        navigate(`/${link}`);
    };

    return (
        <div className='my-10'>
            <div className='text-center text-2xl tracking-wider px-3'>
                <p className="inline-block pb-2 border-b-2 border-red-500">Shop By Category</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <Crad
                    photoName={"macbook"}
                    category={"Laptop & Phone"}
                    onClick={() => handleNavigate("laptops")}
                />
                <Crad
                    photoName={"earphone"}
                    category={"Earbuds"}
                    onClick={() => handleNavigate("earbuds")}
                />
                <Crad
                    photoName={"smartwatch"}
                    category={"Watches"}
                    onClick={() => handleNavigate("watchs")}
                />
                <Crad
                    photoName={"speaker"}
                    category={"SmartDevices"}
                    onClick={() => handleNavigate("smartdevices")}
                />
            </div>
            <div className='text-center text-2xl tracking-wider px-3 pt-10 pb-5'>
                <p className="inline-block pb-2 border-b-2 border-red-500">Explor Our Products</p>
            </div>
            <Products />
        </div>
    );
};

export default Caregory;
