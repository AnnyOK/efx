import React, { useEffect, useState } from 'react';
import NavBarItem from '../components/NavBarItem';
import home from '../assets/images/home-img.svg'
import add from '../assets/images/icons=Add.svg'
import logout from '../assets/images/icons=logout.svg'
import report from '../assets/images/icons=Report.svg'
import logo from '../assets/images/logo-black.png'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')[2]
    const [activeIndex,setActiveIndex] = useState('Home')
    const handleclick=(title:string,to:string)=>{
setActiveIndex(title)
navigate(to)
    }
    useEffect(()=>{
        console.log(location)
        switch(location){
            case undefined:
            setActiveIndex("Home")
            break;
            case"addrate":
            setActiveIndex('ADD RATE')
            break;
            case"addvolume":
            setActiveIndex('ADD VOLUME')
            break;
            case"report":
            setActiveIndex('REPORT')
            break;
            case"logout":
            setActiveIndex('LOGOUT')
            break;
           default:
            setActiveIndex('HOME')

        }
    },[location])
    return (
        <>
        <div className='flex w-full px-10 bg-white'>
            <div className='flex flex-1 flex-wrap'>
            <NavBarItem title={'Home'} img={home} activeIndex={activeIndex} onClick={handleclick} to={''}/>
            <NavBarItem title={'ADD RATE'} img={add} activeIndex={activeIndex} onClick={handleclick} to={'addrate'}/>
            <NavBarItem title={'ADD VOLUME'} img={''} activeIndex={activeIndex} onClick={handleclick} to={'addvolume'}/>
            <NavBarItem title={'REPORT'} img={report} activeIndex={activeIndex} onClick={handleclick} to={'report'}/>
            <NavBarItem title={'LOGOUT'} img={logout} activeIndex={activeIndex} onClick={handleclick} to={'logout'}/>
            </div>
            <img src={logo} alt="" />
        </div>
        <div className='px-10 py-2 w-full'>
            <Outlet/>
        </div>
        </>

    );
};

export default Dashboard;