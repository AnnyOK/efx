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
    const [menu,setOpenMenu] = useState(true)
    const [activeIndex,setActiveIndex] = useState('Home')
    const handleclick=(title:string,to:string)=>{
setActiveIndex(title)
navigate(to)
    }
 //fix styling issue
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
        <div>
        <div className='flex flex-1 px-10 bg-white w-full justify-between m-0 border-box'> 
            { menu&&
            <div className='md:hidden shadow-md rounded-md border flex flex-col gap-2 items-center justify-center p-4 ' onClick={()=>setOpenMenu(!menu)}>
                <div className="w-[50px] border-2 border-gray-500 rounded-full"></div>
                <div className="w-[50px] border-2 border-gray-500 rounded-full"></div>
                <div className="w-[50px] border-2 border-gray-500 rounded-full"></div>
            </div>}
            {!menu &&
             <div className='flex-col flex md:hidden'>
            <NavBarItem title={'Home'} img={home} activeIndex={activeIndex} onClick={handleclick} to={''}/>
            <NavBarItem title={'ADD RATE'} img={add} activeIndex={activeIndex} onClick={handleclick} to={'addrate'}/>
            <NavBarItem title={'ADD VOLUME'} img={''} activeIndex={activeIndex} onClick={handleclick} to={'addvolume'}/>
            <NavBarItem title={'REPORT'} img={report} activeIndex={activeIndex} onClick={handleclick} to={'report'}/>
            <NavBarItem title={'LOGOUT'} img={logout} activeIndex={activeIndex} onClick={handleclick} to={'logout'}/>
            </div>
            }
            <div className=' flex-1  hidden md:flex w-full'>
            <NavBarItem title={'Home'} img={home} activeIndex={activeIndex} onClick={handleclick} to={''}/>
            <NavBarItem title={'ADD RATE'} img={add} activeIndex={activeIndex} onClick={handleclick} to={'addrate'}/>
            <NavBarItem title={'ADD VOLUME'} img={''} activeIndex={activeIndex} onClick={handleclick} to={'addvolume'}/>
            <NavBarItem title={'REPORT'} img={report} activeIndex={activeIndex} onClick={handleclick} to={'report'}/>
            <NavBarItem title={'LOGOUT'} img={logout} activeIndex={activeIndex} onClick={handleclick} to={'logout'}/>
            </div>
            <div className=' flex items-center'><img src={logo} alt="" width={200} height={25} /></div>
        </div>
        <div className=' py-2 flex w-full '>
            <Outlet/>
        </div>
        </div>

    );
};

export default Dashboard;