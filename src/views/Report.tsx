import React, { useState } from 'react';
import giticon from '../assets/images/favicon1.png';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import RateTable from './tables/RateTable';
import VolumeTable from './tables/VolumeTable';
import { TbScript } from '../utils/reacticon';
type ButtonProp = {
	title: string;
	children: React.ReactNode;
	onClick: () => void;
    style: string;
};
const Report = () => {
	const [active, setActive] = useState(1);
	// const [viewRate, setViewRate] = useState(false);
	// const [viewVolume, setViewVolume] = useState(false);
	// const navigate = useNavigate();
	
	
	return (
		<div className='rounded-xl shadow-md p-4 bg-white flex flex-col w-fit flex-1 '>
			
			<div className='flex items-center justify-start border-b-2 border-b-orange-500 p-0 flex-1'>
            <TbScript className='rounded-full bg-[#f9e9e9] p-2 text-[39px]  border-white font-thin' />
				<p className='text-[26px] font-latoBold'>
					Report
				</p>
			</div>
            <div className='flex justify-end  border-b-2 border-b-orange-500 py-6 gap-4 flex-1 flex-wrap'>
            <Button title={'EXPORT'} children={''} onClick={() => ''} style={'bg-gradient-to-r from-orange-500 to-red-500 text-white  '}/>
               <div className='w-full flex justify-end   flex-wrap gap-4'>
                 <label htmlFor="from" className='flex flex-wrap items-center gap-4 justify-end'>
                    Filter from:
                    <input name='from' type="date" className='outline-none shadow-md rounded-lg p-4' />
                </label>
                <label htmlFor="to" className='flex  items-center gap-4 flex-wrap justify-end'>
                   to:
                    <input name='to' type="date" className='outline-none shadow-md rounded-lg p-4' />
                </label>
            <Button title={'FILTER'} children={''} onClick={() => ''} style={'text-white bg-black'}/></div>
			</div>

			
			<div>
				<div className='md:hidden visible'>
					<div
						className={`${
							active === 1
								? ' bg-black '
								: ' bg-gray-400 '
						}rounded-ss-2xl rounded-ee-2xl text-white text-left py-2 px-10`}
						onClick={() => setActive(1)}
					>
						Rate
					</div>

					{active == 1 && <RateTable />}
					<div
						className={`${
							active === 2
								? ' bg-black '
								: ' bg-gray-400 '
						}rounded-ss-2xl rounded-ee-2xl text-white text-left py-2 px-10`}
						onClick={() => setActive(2)}
					>
						Volume Limit
					</div>

					{active == 2 && <VolumeTable />}
				</div>
				<div className='md:flex md:visible hidden'>
					<div
						onClick={() => setActive(1)}
						className={`${
							active == 1
								? ' bg-black text-white'
								: 'bg-gray-50 text-black'
						} flex justify-center border-b-2  p-4 `}
					>
						Rate
					</div>
					<div
						onClick={() => setActive(2)}
						className={`${
							active == 2
								? 'bg-black text-white'
								: 'bg-gray-50 text-blacl'
						} flex justify-center border-b-2  p-4 `}
					>
						Volume Limit
					</div>
				</div>
			</div>
			<div className='md:flex md:visible hidden'>
				{active == 1 ? (
					<RateTable />
				) : active == 2 ? (
					<VolumeTable />
				) : (
					''
				)}
			</div>
		</div>
	);
};

export default Report;
const Button: React.FC<ButtonProp> = ({
	title,
	children,
	onClick,
	style,
}) => {
	
	return (
		<div
			className={`${style} hover:pointer flex items-center gap-2 justify-center font-latoBold text-[14px] py-4 px-10 rounded-md `}
			onClick={onClick}
		>
			{children}
			<p className='font-bold'>{title}</p>
		</div>
	);
};
