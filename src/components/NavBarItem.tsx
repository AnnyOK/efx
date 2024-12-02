import React from 'react';
type NavItemProp={
    title:string,
    img:string
    activeIndex:string,
    onClick:(title:string,to:string)=>void
    to:string
}
const NavBarItem:React.FC<NavItemProp> = ({title,img,activeIndex,onClick,to}) => {
const active= activeIndex===title
    return (
        <div className={` ${ active?"bg-black text-white font-bold ":" bg-white text-black hover:bg-slate-100 "} flex items-center gap-2 flex-1 p-3 min-w-fit `} onClick={()=>onClick(title,to)}>
            {img&&<img src={img} alt=""  className='text-red-500' width={18} height={18}/>}
            <p className='min-w-fit text-nowrap'>{title}</p>
        </div>
    );
};

export default NavBarItem;