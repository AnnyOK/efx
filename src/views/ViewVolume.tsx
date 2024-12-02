import React, { useState } from 'react';
import { FaRegThumbsUp } from '../utils/reacticon';
type Volume = {
	currency: string;
	volume: number;
	used: number;
	unused: number;
};
type VolumeType = {
	ii: Volume;
	iii: Volume;
	i: Volume;
};
const ViewVolumeModal = () => {
	const [volume, updateVolume] = useState<VolumeType>({
		i: { currency: 'USD/NGN', volume: 0, used: 0 ,unused: 0 },
		ii: { currency: 'USD/NGN', volume: 0, used: 0 ,unused: 0 },
		iii: { currency: 'USD/NGN', volume: 0, used: 0 ,unused: 0 },
	});
	return (
		<div className=' flex flex-col min-w-[300px] items-center text-left m-0 p-0relative top-[0] animate-animateDrop '>
			<h1 className='text-left place-self-start text-[18px]'>Volume Limit</h1>
			<div className='flex flex-1 w-full justify-between'>
				<h3>CURRENCY</h3>
				<h3>VOLUME</h3>
				<h3>USED</h3>
				<h3>UNUSED</h3>
			</div>
			<div className='flex flex-1 w-full justify-between'>
				<h3>{volume.i.currency}</h3>{' '}
				<p>{volume.i.volume}</p>{' '}
				<p>{volume.i.used}</p>
				<p>{volume.i.unused}</p>
			</div>
			<div className='flex flex-1 w-full justify-between'>
            <h3>{volume.ii.currency}</h3>{' '}
				<p>{volume.ii.volume}</p>{' '}
				<p>{volume.ii.used}</p>
				<p>{volume.ii.unused}</p>
			</div>
			<div className='flex flex-1 w-full justify-between'>
            <h3>{volume.iii.currency}</h3>{' '}
				<p>{volume.iii.volume}</p>{' '}
				<p>{volume.iii.used}</p>
				<p>{volume.iii.unused}</p>
			</div>
<div className='border-b-2 border-b-orange-400 w-full flex justify-center p-2'>
<span className='text-[12px] text-center '>Last Updated: Thursday 29th August, 2024
</span>
</div>
           
            <OkButton title={'Ok'} children={<FaRegThumbsUp/>} onClick={()=>""} style={'text-white bg-gradient-to-r from-orange-500 to-red-500 w-fit  '}/>
		</div>
	);
};

export default ViewVolumeModal;
type OkButtonProp={
    title: string,
    children:React.ReactNode,
    onClick: (event:any) => void,
    style: string
}
const OkButton: React.FC<OkButtonProp> = ({
	title,
	children,
	onClick,
    style
}) => {
	
	return (
		<div
			className={`${style} flex items-center place-self-end m-4 gap-2 justify-center p-2 px-6 rounded-md border-2  max-w-full`}
			onClick={onClick}
		>
			{children}
			<p className='font-bold'>{title}</p>
		</div>
	);
};
